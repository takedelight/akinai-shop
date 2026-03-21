'use client';

import { signOut } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Button } from '@mantine/core';
import { RiLogoutBoxLine } from '@remixicon/react';

import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

export const LogOut = () => {
  const t = useTranslations('profile.aside');

  return (
    <Button
      variant="outline"
      size={'md'}
      onClick={() => signOut({ callbackUrl: PAGES.HOME })}
      leftSection={<RiLogoutBoxLine />}
      className={` ${s.navbarLink} ${s.logout} `}
    >
      {t('logOut')}
    </Button>
  );
};
