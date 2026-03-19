import { getTranslations } from 'next-intl/server';

import { Button } from '@mantine/core';
import { RiArrowRightLongLine, RiCloseLine } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';
import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

export const BlackFridayBanner = async () => {
  const t = await getTranslations('BlackFridayBanner');
  return (
    <Link href={PAGES.HOME} className={s.banner}>
      <div className={s.content}>
        <div className={s.text}>
          <span className={s.black}> {t('black')}</span>
          <span className={s.friday}>{t('friday')}</span>
        </div>

        <p className={s.discount}>
          {t.rich('discount', {
            number: 59,
            discount: (chunks) => <span className={s.number}>{chunks}</span>,
          })}
        </p>

        <Button color="warning" rightSection={<RiArrowRightLongLine />} className={s.button}>
          {t('shopNow')}
        </Button>
      </div>

      <Button variant="outline" className={s.close}>
        <RiCloseLine />
      </Button>
    </Link>
  );
};
