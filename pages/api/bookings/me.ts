// FILE: pages/api/bookings/me.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';
import { requireAuth, AuthenticatedRequest } from '../../../middleware/auth';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const user = requireAuth(req as AuthenticatedRequest, res);
  if (!user) return;

  try {
    const bookings = await prisma.booking.findMany({
      where: {
        userId: user.userId,
      },
      include: {
        activity: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return res.status(200).json(bookings);
  } catch (error) {
    console.error('Get user bookings error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
