'use client';

import { signIn } from 'next-auth/react';
import { useTranslations } from 'next-intl';

import { Card } from '@mantine/core';
import { RiGoogleFill } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';

import s from './styles.module.scss';

const LoginPage = () => {
  const t = useTranslations('auth');

  return (
    <section className={s.auth}>
      <Card withBorder>
        <h2 className={s.title}>{t('OAuth.title')}</h2>
        <ul className={s.oauthLinks}>
          <li className={s.oauthItem}>
            <Link
              href="/auth/login"
              onClick={async (e) => {
                e.preventDefault();
                await signIn('google', { callbackUrl: '/' });
              }}
              className={s.oauthLink}
            >
              <RiGoogleFill />
              {t('OAuth.google')}
            </Link>
          </li>
        </ul>
      </Card>
    </section>
  );
};

export default LoginPage;
