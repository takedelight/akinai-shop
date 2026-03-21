import { PropsWithChildren } from 'react';

import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import {
  RiBankCardLine,
  RiDashboardLine,
  RiHeart3Line,
  RiHistoryLine,
  RiMapPinLine,
  RiScales3Line,
  RiSettings3Line,
  RiShoppingBagLine,
  RiShoppingCart2Line,
} from '@remixicon/react';

import { LogOut } from '@/app/[locale]/profile/LogOut';

import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

const PROFILE_NAVBAR = [
  { title: 'dashboard', icon: RiDashboardLine, href: PAGES.PROFILE.HOME },
  { title: 'orderHistory', icon: RiShoppingBagLine, href: PAGES.PROFILE.ORDER_HISTORY },
  { title: 'trackOrder', icon: RiMapPinLine, href: PAGES.PROFILE.TRACK_ORDER },
  { title: 'shoppingCart', icon: RiShoppingCart2Line, href: PAGES.PROFILE.CART },
  { title: 'wishlist', icon: RiHeart3Line, href: PAGES.PROFILE.WISHLIST },
  { title: 'compare', icon: RiScales3Line, href: PAGES.PROFILE.COMPARE },
  { title: 'cardAndAddress', icon: RiBankCardLine, href: PAGES.PROFILE.CARDS_ADDRESS },
  { title: 'browsingHistory', icon: RiHistoryLine, href: PAGES.PROFILE.BROWSING_HISTORY },
  { title: 'settings', icon: RiSettings3Line, href: PAGES.PROFILE.SETTINGS },
];

const ProfileLayout = async ({ children }: PropsWithChildren) => {
  const t = await getTranslations('profile');

  return (
    <div className={s.profileLayout}>
      <aside className={s.aside}>
        <ul className={s.navbar}>
          {PROFILE_NAVBAR.map((item) => (
            <li className={s.navbarItem} key={item.title}>
              <Link className={s.navbarLink} href={`/${item.href}`}>
                <item.icon />
                {t(`aside.${item.title}`)}
              </Link>
            </li>
          ))}
          <li className={s.navbarItem}>
            <LogOut />
          </li>
        </ul>
      </aside>
      <section className={s.content}>{children}</section>
    </div>
  );
};

export default ProfileLayout;
