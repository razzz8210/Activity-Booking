// FILE: pages/api/activities/index.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { requireAuth, requireAdmin, AuthenticatedRequest } from '../../../middleware/auth';
import { createActivitySchema } from '../../../utils/validation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    try {
      const activities = await prisma.activity.findMany({
        include: {
          _count: {
            select: { bookings: true },
          },
        },
        orderBy: {
          date: 'asc',
        },
      });

      return res.status(200).json(activities);
    } catch (error) {
      console.error('Get activities error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  if (req.method === 'POST') {
    const user = requireAdmin(req as AuthenticatedRequest, res);
    if (!user) return;

    try {
      const validation = createActivitySchema.safeParse(req.body);

      if (!validation.success) {
        return res.status(400).json({ 
          error: 'Validation failed', 
          details: validation.error.errors 
        });
      }

      const { title, description, date, capacity } = validation.data;

      const activity = await prisma.activity.create({
        data: {
          title,
          description,
          date: new Date(date),
          capacity,
        },
      });

      return res.status(201).json(activity);
    } catch (error) {
      console.error('Create activity error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
