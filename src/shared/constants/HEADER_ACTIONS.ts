import { RiErrorWarningLine, RiHeadphoneLine, RiMapPinLine, RiRefreshLine } from '@remixicon/react';

import { PAGES } from '@/shared/pages';

export const HEADER_ACTIONS = [
  { title: 'trackOrder', href: PAGES.TRACK_ORDERS, icon: RiMapPinLine },
  { title: 'compare', href: PAGES.COMPARE, icon: RiRefreshLine },
  { title: 'customerSupport', href: PAGES.CUSTOMER_SUPPORT, icon: RiHeadphoneLine },
  { title: 'needHelp', href: PAGES.NEED_HELP, icon: RiErrorWarningLine },
] as const;
