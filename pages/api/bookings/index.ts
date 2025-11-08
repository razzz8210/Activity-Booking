// FILE: pages/api/bookings/index.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { requireAuth, AuthenticatedRequest } from '../../../middleware/auth';
import { createBookingSchema } from '../../../utils/validation';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = requireAuth(req as AuthenticatedRequest, res);
  if (!user) return;

  try {
    const validation = createBookingSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({ 
        error: 'Validation failed', 
        details: validation.error.errors 
      });
    }

    const { activityId } = validation.data;

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

    if (activity._count.bookings >= activity.capacity) {
      return res.status(400).json({ error: 'Activity is at full capacity' });
    }

    const existingBooking = await prisma.booking.findUnique({
      where: {
        userId_activityId: {
          userId: user.userId,
          activityId,
        },
      },
    });

    if (existingBooking) {
      return res.status(400).json({ error: 'You have already booked this activity' });
    }

    const booking = await prisma.booking.create({
      data: {
        userId: user.userId,
        activityId,
      },
      include: {
        activity: true,
        user: {
          select: {
            id: true,
            name: true,
            email: true,
          },
        },
      },
    });

    return res.status(201).json(booking);
  } catch (error) {
    console.error('Create booking error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
