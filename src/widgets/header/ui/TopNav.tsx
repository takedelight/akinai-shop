import { getTranslations } from 'next-intl/server';

import { CurrencyMenu } from '@/features/currency-menu';
import { LanguageMenu } from '@/features/language-menu';

import { Link } from '@/shared/configs/i18n';
import { SOCIAL_LINKS } from '@/shared/constants';

import s from './styles.module.scss';

export const TopNav = async () => {
  const t = await getTranslations('header.topNav');

  return (
    <div className={s.topNavWrapper}>
      <nav className={s.topnav}>
        <p>{t('welcomeText')}</p>

        <ul className={s.rightSide}>
          <li className={s.follows}>
            <h2 className={s.followsTitle}>{t('followUs')}</h2>
            <ul className={s.followsList}>
              {SOCIAL_LINKS.map((link) => (
                <li key={link.title}>
                  <Link
                    title={link.title}
                    target="_blank"
                    className={s.followLink}
                    href={link.href}
                  >
                    <link.icon size="20" color="white" />
                  </Link>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <span className={s.divider}></span>
          </li>

          <div className={s.settings}>
            <li>
              <LanguageMenu />
            </li>
            <li>
              <CurrencyMenu />
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};
