'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

import { Button, Menu } from '@mantine/core';
import { RiArrowDownSLine } from '@remixicon/react';

import { usePathname, useRouter } from '@/shared/configs/i18n';

import s from './styles.module.scss';

export const LanguageMenu = () => {
  const t = useTranslations('header.topNav.languageMenu');

  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (nextLocale: 'en' | 'uk') => {
    router.replace(pathname, { locale: nextLocale });
  };
  return (
    <Menu
      position="bottom-end"
      width={180}
      trigger="click-hover"
      transitionProps={{ exitDuration: 300 }}
      withinPortal
    >
      <Menu.Target>
        <Button variant="subtle" color="white" rightSection={<RiArrowDownSLine size={16} />}>
          {t('currentLanguage')}
        </Button>
      </Menu.Target>

      <Menu.Dropdown className={s.menu}>
        <Menu.Item onClick={() => changeLanguage('en')} classNames={{ itemLabel: s.item }}>
          <Image src="/english-lang.png" alt="English" width={20} height={20} />
          {t('en')}
        </Menu.Item>
        <Menu.Item onClick={() => changeLanguage('uk')} classNames={{ itemLabel: s.item }}>
          <Image src="/ukrainian-lang.png" alt="Ukrainian" width={20} height={20} />
          {t('uk')}
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
