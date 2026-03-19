import { RiErrorWarningLine, RiHeadphoneLine, RiMapPinLine, RiRefreshLine } from '@remixicon/react';

import { PAGES } from '@/shared/pages';

export const HEADER_ACTIONS = [
  { title: 'Track Order', href: PAGES.TRACK_ORDERS, icon: RiMapPinLine },
  { title: 'Compare', href: PAGES.COMPARE, icon: RiRefreshLine },
  { title: 'Customer Support', href: PAGES.CUSTOMER_SUPPORT, icon: RiHeadphoneLine },
  { title: 'Need Help', href: PAGES.NEED_HELP, icon: RiErrorWarningLine },
] as const;
