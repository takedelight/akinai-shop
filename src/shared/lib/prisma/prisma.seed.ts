import { Prisma, PrismaClient, UserRole } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import { hash } from 'argon2';
import pg from 'pg';

const connectionString = process.env.DIRECT_URL;

const pool = new pg.Pool({ connectionString });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput = {
  firstName: 'Олексій',
  lastName: 'Ніколаєнко',
  avatar: null,
  email: process.env.ADMIN_EMAIL || 'admin@admin.com',
  password: process.env.ADMIN_PASSWORD || 'admin',
  role: UserRole.ADMIN,
  phoneNumber: process.env.ADMIN_PHONE_NUMBER,
};

export async function main() {
  try {
    await prisma.user.upsert({
      where: {
        email: userData.email,
      },
      create: {
        ...userData,
        password: await hash(userData.password!),
      },
      update: {
        firstName: userData.firstName,
        lastName: userData.lastName,
        phoneNumber: userData.phoneNumber,
      },
    });

    console.log('Адміністратора успішно створено.');
  } catch (e) {
    console.error(e);
    console.error('Під час створення адміністратора сталася помилка.');
  } finally {
    await prisma.$disconnect();
    process.exit(0);
  }
}

main();
