import { getTranslations } from 'next-intl/server';

import { RiGoogleFill } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';

import s from './styles.module.scss';

const LoginPage = async () => {
  const t = await getTranslations('auth');

  return (
    <section className={s.auth}>
      <ul className={s.oauthLinks}>
        <li className={s.oauthItem}>
          <Link href="/" className={s.oauthLink}>
            <RiGoogleFill />
            {t('OAuth.google')}
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default LoginPage;
