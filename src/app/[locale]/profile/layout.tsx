import { PropsWithChildren } from 'react';

import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

import {
  RiBankCardLine,
  RiDashboardLine,
  RiHeart3Line,
  RiHistoryLine,
  RiLogoutBoxLine,
  RiMapPinLine,
  RiRefreshLine,
  RiSettings3Line,
  RiShoppingBagLine,
  RiShoppingCart2Line,
} from '@remixicon/react';

import s from './styles.module.scss';

const PROFILE_NAVBAR = [
  { title: 'dashboard', icon: RiDashboardLine },
  { title: 'orderHistory', icon: RiShoppingBagLine },
  { title: 'trackOrder', icon: RiMapPinLine },
  { title: 'shoppingCart', icon: RiShoppingCart2Line },
  { title: 'wishlist', icon: RiHeart3Line },
  { title: 'compare', icon: RiRefreshLine },
  { title: 'cardAndAddress', icon: RiBankCardLine },
  { title: 'browsingHistory', icon: RiHistoryLine },
  { title: 'settings', icon: RiSettings3Line },
  { title: 'logOut', icon: RiLogoutBoxLine },
];

const ProfileLayout = async ({ children }: PropsWithChildren) => {
  const t = await getTranslations('profile');

  return (
    <div className={s.profileLayout}>
      <aside className={s.aside}>
        <ul className={s.navbar}>
          {PROFILE_NAVBAR.map((item) => (
            <li className={s.navbarItem} key={item.title}>
              <Link className={s.navbarLink} href={`/${item.title}`}>
                <item.icon />
                {t(`aside.${item.title}`)}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <section className={s.content}>{children}</section>
    </div>
  );
};

export default ProfileLayout;
