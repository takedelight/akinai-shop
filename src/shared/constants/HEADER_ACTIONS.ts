import {
  RiErrorWarningLine,
  RiHeadphoneLine,
  RiMapPinLine,
  RiRefreshLine,
  RiScales3Line,
} from '@remixicon/react';

import { PAGES } from '@/shared/pages';

export const HEADER_ACTIONS = [
  { title: 'trackOrder', href: PAGES.PROFILE.TRACK_ORDER, icon: RiMapPinLine },
  { title: 'compare', href: PAGES.PROFILE.COMPARE, icon: RiScales3Line },
  { title: 'customerSupport', href: PAGES.CUSTOMER_SUPPORT, icon: RiHeadphoneLine },
  { title: 'needHelp', href: PAGES.NEED_HELP, icon: RiErrorWarningLine },
] as const;
