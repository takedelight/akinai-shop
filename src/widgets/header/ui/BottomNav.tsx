import { useTranslations } from 'next-intl';

import { Button } from '@mantine/core';
import { RiArrowDownSLine, RiPhoneLine } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';
import { HEADER_ACTIONS } from '@/shared/constants';

import s from './styles.module.scss';

export const BottomNav = () => {
  const t = useTranslations('header.bottomNav');

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
              {t('allCategory')}
            </Button>
          </li>

          {HEADER_ACTIONS.map((action) => (
            <li key={action.title}>
              <Link className={s.actionLink} href={action.href}>
                <action.icon />
                {t(`nav.${action.title}`)}
              </Link>
            </li>
          ))}
        </ul>

        <Link className={s.phone} href="tel:+38(000)-000-00-00" title={t('contactUs')}>
          <RiPhoneLine />
          +380 00 000 00 00
        </Link>
      </nav>
    </div>
  );
};
