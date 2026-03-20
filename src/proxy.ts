import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';
import createMiddleware from 'next-intl/middleware';
import { NextFetchEvent, NextRequest } from 'next/server';

import { routing } from '@/shared/configs/i18n';

const intlMiddleware = createMiddleware(routing);

const authMiddleware = withAuth(
  function onSuccess(req) {
    return intlMiddleware(req);
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        const isPrivatePage =
          pathname.includes('/profile') ||
          pathname.includes('/checkout') ||
          pathname.includes('/admin');

        return isPrivatePage ? !!token : true;
      },
    },
    pages: {
      signIn: '/auth/login',
    },
  }
);

export default function proxy(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;
  const isPrivatePage =
    pathname.includes('/profile') || pathname.includes('/checkout') || pathname.includes('/admin');

  if (isPrivatePage) {
    return authMiddleware(req as NextRequestWithAuth, event);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
