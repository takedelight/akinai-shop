import { createNavigation } from 'next-intl/navigation';

import { routing } from '@/shared/configs/i18n/routing';

export const { getPathname, Link, usePathname, useRouter, permanentRedirect, redirect } =
  createNavigation(routing);
