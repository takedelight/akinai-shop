'use client';

import Image from 'next/image';

import { Button, Menu } from '@mantine/core';
import { RiArrowDownSLine } from '@remixicon/react';

import s from './styles.module.scss';

export const LanguageMenu = () => {
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
          Eng
        </Button>
      </Menu.Target>

      <Menu.Dropdown className={s.menu}>
        <Menu.Item classNames={{ itemLabel: s.item }}>
          <Image src="/english-lang.png" alt="English" width={20} height={20} />
          English
        </Menu.Item>
        <Menu.Item classNames={{ itemLabel: s.item }}>
          <Image src="/ukrainian-lang.png" alt="Ukrainian" width={20} height={20} />
          Ukrainian
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
