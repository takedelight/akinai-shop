import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

import { authOptions } from '@/shared/configs/auth';
import { Link } from '@/shared/configs/i18n';
import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

const Dashboard = async () => {
  const t = await getTranslations('profile.content.dashboard');

  const session = await getServerSession(authOptions);

  return (
    <div className={s.dashboard}>
      <header className={s.header}>
        <h2 className={s.headerTitle}>{t('header.title')}</h2>
        <p className={s.headerText}>
          {t.rich('header.text', {
            orders: (chunks) => (
              <Link href={PAGES.PROFILE.ORDERS} className={s.headerLink}>
                {chunks}
              </Link>
            ),
            address: (chunks) => (
              <Link href={PAGES.PROFILE.CARDS_ADDRESS} className={s.headerLink}>
                {chunks}
              </Link>
            ),
            password: (chunks) => (
              <Link href={PAGES.PROFILE.SETTINGS} className={s.headerLink}>
                {chunks}
              </Link>
            ),
            details: (chunks) => (
              <Link href={PAGES.PROFILE.SETTINGS} className={s.headerLink}>
                {chunks}
              </Link>
            ),
          })}
        </p>
      </header>

      <ul className={s.accountCards}>
        <li className={s.accountCard}>
          <div className={s.cardTi}></div>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
