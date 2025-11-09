// FILE: prisma/seed.ts

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminPassword = await bcrypt.hash('adminpass', 10);
  const userPassword = await bcrypt.hash('userpass', 10);

  const admin = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      isAdmin: true,
    },
  });

  const user = await prisma.user.upsert({
    where: { email: 'user@example.com' },
    update: {},
    create: {
      name: 'Regular User',
      email: 'user@example.com',
      password: userPassword,
      isAdmin: false,
    },
  });

  const activity1 = await prisma.activity.create({
    data: {
      title: 'Yoga Class',
      description: 'Morning yoga session for beginners',
      date: new Date('2025-11-15T09:00:00Z'),
      capacity: 10,
    },
  });

  const activity2 = await prisma.activity.create({
    data: {
      title: 'Cooking Workshop',
      description: 'Learn to cook Italian pasta',
      date: new Date('2025-11-20T14:00:00Z'),
      capacity: 8,
    },
  });

  console.log({ admin, user, activity1, activity2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
