'use client';

import { Button, Menu } from '@mantine/core';
import { RiArrowDownSLine } from '@remixicon/react';

import s from './styles.module.scss';

export const CurrencyMenu = () => {
  return (
    <Menu
      position="bottom-start"
      width={160}
      trigger="click-hover"
      transitionProps={{ exitDuration: 300 }}
      withinPortal
    >
      <Menu.Target>
        <Button variant="subtle" color="white" rightSection={<RiArrowDownSLine size={16} />}>
          USD
        </Button>
      </Menu.Target>

      <Menu.Dropdown className={s.menu}>
        <Menu.Item className={s.item}>Dollar (USD)</Menu.Item>

        <Menu.Item className={s.item}>Hryvnia (UAH)</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
