import Link from 'next/link';

import { CurrencyMenu } from '@/features/currency-menu';
import { LanguageMenu } from '@/features/language-menu';

import { SOCIAL_LINKS } from '@/shared/constants';

import s from './styles.module.scss';

export const TopNav = () => {
  return (
    <div className={s.topNavWrapper}>
      <nav className={s.topnav}>
        <p>Welcome to Akinai商い online eCommerce store. </p>

        <ul className={s.rightSide}>
          <li className={s.follows}>
            <h2 className={s.followsTitle}>Follow us:</h2>
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
