// FILE: pages/api/activities/[id].ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { requireAdmin, AuthenticatedRequest } from '../../../middleware/auth';
import { updateActivitySchema } from '../../../utils/validation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id } = req.query;
  const activityId = parseInt(id as string, 10);

  if (isNaN(activityId)) {
    return res.status(400).json({ error: 'Invalid activity ID' });
  }

  if (req.method === 'GET') {
    try {
      const activity = await prisma.activity.findUnique({
        where: { id: activityId },
        include: {
          _count: {
            select: { bookings: true },
          },
        },
      });

      if (!activity) {
        return res.status(404).json({ error: 'Activity not found' });
      }

      return res.status(200).json(activity);
    } catch (error) {
      console.error('Get activity error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'PUT') {
    const user = requireAdmin(req as AuthenticatedRequest, res);
    if (!user) return;

    try {
      const validation = updateActivitySchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: validation.error.errors 
        });
      }

      const { title, description, date, capacity } = validation.data;

      const updateData: any = {};
      if (title !== undefined) updateData.title = title;
      if (description !== undefined) updateData.description = description;
      if (date !== undefined) updateData.date = new Date(date);
      if (capacity !== undefined) updateData.capacity = capacity;

      const activity = await prisma.activity.update({
        where: { id: activityId },
        data: updateData,
      });

      return res.status(200).json(activity);
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Activity not found' });
      }
      console.error('Update activity error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'DELETE') {
    const user = requireAdmin(req as AuthenticatedRequest, res);
    if (!user) return;

    try {
      await prisma.activity.delete({
        where: { id: activityId },
      });

      return res.status(200).json({ message: 'Activity deleted successfully' });
    } catch (error: any) {
      if (error.code === 'P2025') {
        return res.status(404).json({ error: 'Activity not found' });
      }
      console.error('Delete activity error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
