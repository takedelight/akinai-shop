import { getServerSession } from 'next-auth';
import { getTranslations } from 'next-intl/server';
import { redirect } from 'next/navigation';

import { Avatar } from '@mantine/core';

import { authOptions } from '@/shared/configs/auth';
import { Link } from '@/shared/configs/i18n';
import { prisma } from '@/shared/lib/prisma';
import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

const Dashboard = async () => {
  const t = await getTranslations('profile.content.dashboard');

  const session = await getServerSession(authOptions);

  if (!session) {
    redirect(PAGES.AUTH.LOGIN);
  }

  const user = await prisma.user.findUnique({ where: { id: session.user.id } });

  const avatarFallback = `${user?.firstName?.[0] || ''}${user?.lastName?.[0] || ''}`.toUpperCase();

  const initial = user?.firstName || '' + user?.lastName || '';

  return (
    <div className={s.dashboard}>
      <h1 className="sr-only">DASHBOARD</h1>

      <header className={s.header}>
        <h2 className={s.headerTitle}>{`${t('header.title')} ${initial}`}</h2>
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
          <header className={s.cardHeader}>
            <h2 className={s.cardTitle}>Account Info</h2>
          </header>
          <section className={s.cardContent}>
            <div className={s.accountInfo}>
              <div className={s.avatar}>
                {' '}
                <Avatar className={s.userAvatar} src={user?.avatar} size={48} radius={100}>
                  {avatarFallback}
                </Avatar>
                <div className={s.userInfo}>
                  <h3 className={s.userName}> {initial}</h3>
                  <span className={s.userAddress}>Dhaka - 1207, Bangladesh</span>
                </div>
              </div>

              <ul className={s.detailsList}>
                <li className={s.detailsItem}>
                  Email: <span>{user?.email}</span>
                </li>
                <li className={s.detailsItem}>
                  Phone: <span>{user?.phoneNumber || 'Не додано'}</span>
                </li>
              </ul>
            </div>
          </section>
          <footer className={s.cardFooter}>
            <Link className={s.cardLink} href={PAGES.PROFILE.SETTINGS}>
              Edit Account
            </Link>
          </footer>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
