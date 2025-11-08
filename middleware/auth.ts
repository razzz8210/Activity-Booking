// FILE: middleware/auth.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { verifyToken, JwtPayload } from '../lib/jwt';

export interface AuthenticatedRequest extends NextApiRequest {
  user?: JwtPayload;
}

export function authenticate(
  req: NextApiRequest,
  res: NextApiResponse
): JwtPayload | null {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json({ error: 'Unauthorized' });
    return null;
  }

  const token = authHeader.substring(7);

  try {
    const decoded = verifyToken(token);
    (req as AuthenticatedRequest).user = decoded;
    return decoded;
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' });
    return null;
  }
}

export function requireAuth(
  req: NextApiRequest,
  res: NextApiResponse
): JwtPayload | null {
  return authenticate(req, res);
}

export function requireAdmin(
  req: NextApiRequest,
  res: NextApiResponse
): JwtPayload | null {
  const user = authenticate(req, res);
  
  if (!user) {
    return null;
  }

  if (!user.isAdmin) {
    res.status(403).json({ error: 'Forbidden: Admin access required' });
    return null;
  }

  return user;
}
