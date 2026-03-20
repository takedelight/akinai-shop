import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';

import { authOptions } from '@/shared/configs/auth';
import { Link } from '@/shared/configs/i18n';

import s from './styles.module.scss';

const Dashboard = async () => {
  const t = await getTranslations('profile.content.dashboard');

  const session = await getServerSession(authOptions);

  return (
    <div className={s.dashboard}>
      <header className={s.header}>
        <h2 className={s.headerTitle}>
          {t('header.title')} {session?.user.name}
        </h2>
        <p className={s.headerText}>
          {t.rich('header.text', {
            orders: (chunks) => (
              <Link href="/orders" className={s.headerLink}>
                {chunks}
              </Link>
            ),
            address: (chunks) => (
              <Link href="/addresses" className={s.headerLink}>
                {chunks}
              </Link>
            ),
            password: (chunks) => (
              <Link href="/settings/password" className={s.headerLink}>
                {chunks}
              </Link>
            ),
            details: (chunks) => (
              <Link href="/settings/account" className={s.headerLink}>
                {chunks}
              </Link>
            ),
          })}
        </p>
      </header>
    </div>
  );
};

export default Dashboard;
