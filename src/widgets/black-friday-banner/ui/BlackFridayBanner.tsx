'use client';

import Link from 'next/link';

import { Button } from '@mantine/core';
import { RiArrowRightLongLine, RiCloseLine } from '@remixicon/react';

import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

export const BlackFridayBanner = () => {
  return (
    <Link href={PAGES.HOME} className={s.banner}>
      <div className={s.content}>
        <div className={s.text}>
          <span className={s.black}> Black</span>
          <span className={s.friday}>Friday</span>
        </div>

        <p className={s.discount}>
          Up to <span className={s.number}>59%</span> <span className={s.off}>OFF</span>
        </p>

        <Button color="warning" rightSection={<RiArrowRightLongLine />} className={s.button}>
          SHOP NOW
        </Button>
      </div>

      <Button variant="outline" className={s.close}>
        <RiCloseLine />
      </Button>
    </Link>
  );
};
