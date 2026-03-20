import NextAuth from 'next-auth';
import { type AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '@/shared/lib/prisma';

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      const firstName = user.name?.split(' ')[0] || user.email.split('@')[0];
      const lastName = user.name?.split(' ')[1];

      await prisma.user.upsert({
        where: { email: user.email },
        update: {
          firstName,
          lastName,
          avatar: user.image,
        },
        create: {
          email: user.email,
          firstName,
          lastName,
          avatar: user.image,
          role: 'USER',
          password: '',
        },
      });

      return true;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
