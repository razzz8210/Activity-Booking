import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({
      status: 'Server is running',
      message: 'Activity Booking API',
      version: '1.0.0',
      endpoints: {
        auth: {
          register: 'POST /api/auth/register',
          login: 'POST /api/auth/login',
        },
        activities: {
          list: 'GET /api/activities',
          single: 'GET /api/activities/:id',
          create: 'POST /api/activities (Admin only)',
          update: 'PUT /api/activities/:id (Admin only)',
          delete: 'DELETE /api/activities/:id (Admin only)',
        },
        bookings: {
          create: 'POST /api/bookings (Auth required)',
          myBookings: 'GET /api/bookings/me (Auth required)',
        },
      },
      documentation: 'https://github.com/razzz8210/Activity-Booking',
      timestamp: new Date().toISOString(),
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
