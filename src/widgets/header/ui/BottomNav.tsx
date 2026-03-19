import Link from 'next/link';

import { Button } from '@mantine/core';
import { RiArrowDownSLine, RiPhoneLine } from '@remixicon/react';

import { HEADER_ACTIONS } from '@/shared/constants';

import s from './styles.module.scss';

export const BottomNav = () => {
  return (
    <div className={s.bottomNavWrapper}>
      <nav className={s.bottomNav}>
        <ul className={s.bottomNavList}>
          <li className={s.bottomNavItem}>
            <Button
              className={s.categoryButton}
              variant="filled"
              rightSection={<RiArrowDownSLine />}
            >
              All Category
            </Button>
          </li>

          {HEADER_ACTIONS.map((action) => (
            <li key={action.title}>
              <Link className={s.actionLink} href={action.href}>
                <action.icon />
                {action.title}
              </Link>
            </li>
          ))}
        </ul>

        <Link className={s.phone} href="tel:+1-202-555-0104">
          <RiPhoneLine />
          +1-202-555-0104
        </Link>
      </nav>
    </div>
  );
};
