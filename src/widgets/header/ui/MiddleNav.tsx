import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { RiHeart3Line, RiSearchLine, RiShoppingCart2Line, RiUserLine } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';
import { PAGES } from '@/shared/pages';
import { InputWithButton } from '@/shared/ui';

import s from './styles.module.scss';

export const MiddleNav = async () => {
  const t = await getTranslations('header.middleNav');

  return (
    <nav className={s.middleNav}>
      <Link className="logo" href={PAGES.HOME}>
        <Image width={48} height={48} src="/logo.svg" alt="Logo icon" />
        <span>Akinai</span>
      </Link>

      <div>
        <InputWithButton
          wrapperProps={{ className: s.searchInput }}
          className={s.searchInput}
          radius={'xs'}
          placeholder={t('searchPlaceholder')}
          classNames={{ wrapper: s.searchInput, input: s.input }}
          aria-label={t('searchPlaceholder')}
          rightSection={<RiSearchLine />}
        />
      </div>

      <ul className={s.actions}>
        <li className={s.actionsItem}>
          <Link title={t('actions.cart')} className={s.actionsLink} href={PAGES.CART}>
            <RiShoppingCart2Line />
          </Link>
        </li>
        <li className={s.actionsItem}>
          <Link title={t('actions.favorites')} className={s.actionsLink} href={PAGES.FAVORITE}>
            <RiHeart3Line />
          </Link>
        </li>
        <li className={s.actionsItem}>
          <Link title={t('actions.profile')} className={s.actionsLink} href={PAGES.PROFILE}>
            <RiUserLine />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
