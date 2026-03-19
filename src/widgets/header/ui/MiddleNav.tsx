import Image from 'next/image';
import Link from 'next/link';

import { RiHeart3Line, RiSearchLine, RiShoppingCart2Line, RiUserLine } from '@remixicon/react';

import { PAGES } from '@/shared/pages';
import { InputWithButton } from '@/shared/ui';

import s from './styles.module.scss';

export const MiddleNav = () => {
  return (
    <nav className={s.middleNav}>
      <Link className={s.logo} href={PAGES.HOME}>
        <Image width={48} height={48} src="/logo.svg" alt="Logo icon" />
        <span>Akinai商い</span>
      </Link>

      <div>
        <InputWithButton
          wrapperProps={{ className: s.searchInput }}
          className={s.searchInput}
          radius={'xs'}
          placeholder="Search for anything..."
          classNames={{ wrapper: s.searchInput, input: s.input }}
          aria-label="Search for anything..."
          rightSection={<RiSearchLine />}
        />
      </div>

      <ul className={s.actions}>
        <li className={s.actionsItem}>
          <Link className={s.actionsLink} href={PAGES.CART}>
            <RiShoppingCart2Line />
          </Link>
        </li>
        <li className={s.actionsItem}>
          <Link className={s.actionsLink} href={PAGES.FAVORITE}>
            <RiHeart3Line />
          </Link>
        </li>
        <li className={s.actionsItem}>
          <Link className={s.actionsLink} href={PAGES.PROFILE}>
            <RiUserLine />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
