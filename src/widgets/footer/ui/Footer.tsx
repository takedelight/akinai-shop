import { getTranslations } from 'next-intl/server';
import Image from 'next/image';

import { RiAppleFill, RiArrowRightLongLine, RiGooglePlayFill } from '@remixicon/react';

import { Link } from '@/shared/configs/i18n';
import { FOOTER_LINKS } from '@/shared/constants';
import { PAGES } from '@/shared/pages';

import s from './styles.module.scss';

const tags = [
  'Game',
  'iPhone',
  'TV',
  'Asus Laptops',
  'Macbook',
  'SSD',
  'Graphics Card',
  'Power Bank',
  'Smart TV',
  'Speaker',
  'Tablet',
  'Microwave',
  'Samsung',
];

export const Footer = async () => {
  const t = await getTranslations('footer');

  return (
    <footer className={s.footer}>
      <div className={s.wrapper}>
        <div className={s.content}>
          <div className={s.info}>
            <Link className="logo" href={PAGES.HOME}>
              <Image width={48} height={48} src="/logo.svg" alt="Logo icon" />
              <span>Akinai</span>
            </Link>

            <ul className={s.infoList}>
              <li className={s.customer}>
                <span className={s.customerTitle}>{t('info.customerSupports')}</span>
                <Link className={s.customerLink} href="tel: +380 00 000 00 00">
                  +380 00 000 00 00
                </Link>
              </li>

              <li className={s.adress}>4517 Washington Ave. Manchester, Kentucky 39495</li>

              <li className={s.email}>
                <Link className={s.emailLink} href="mailto:info@kinbo.com">
                  info@kinbo.com
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className={s.title}>{t('topCategory.title')}</h2>
            <ul className={s.list}>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  Computer & Laptop
                </Link>
              </li>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  SmartPhone
                </Link>
              </li>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  Headphone
                </Link>
              </li>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  Accessories
                </Link>
              </li>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  Camera & Photo
                </Link>
              </li>
              <li className={s.listItem}>
                <Link className={s.listLink} href={PAGES.HOME}>
                  TV & Homes
                </Link>
              </li>
              {/*STATIC LINK*/}
              <li>
                {' '}
                <Link href={PAGES.HOME} className={s.allCategories}>
                  {t('topCategory.allProducts')}
                  <RiArrowRightLongLine />
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.quickLinks}>
            <h2 className={s.title}>{t('quickLinks.title')}</h2>
            <ul className={s.list}>
              {FOOTER_LINKS.map((link) => (
                <li key={link} className={s.listItem}>
                  <Link className={s.listLink} href={PAGES.HOME}>
                    {t(`quickLinks.${link}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.download}>
            <h2 className={s.title}>{t('downloadApp.title')}</h2>
            <ul className={s.downloadList}>
              <li className={s.downloadItem}>
                <Link
                  target={'_blank'}
                  className={s.downloadLink}
                  href=" https://play.google.com/store/apps?hl=ru&pli=1"
                >
                  <RiGooglePlayFill size={32} />
                  <div>
                    <p>{t('downloadApp.description')}</p>
                    <span className={s.store}>Google Play</span>
                  </div>
                </Link>
              </li>
              <li className={s.downloadItem}>
                <Link
                  target={'_blank'}
                  className={s.downloadLink}
                  href="https://apps.apple.com/ru/developer/apple/id284417353?mt=12"
                >
                  <RiAppleFill size={32} />
                  <div>
                    <p>{t('downloadApp.description')}</p>
                    <span className={s.store}>App Store</span>
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div className={s.tags}>
            <h2 className={s.title}>{t('popularTag.title')}</h2>
            <ul className={s.tagsList}>
              {tags.map((tag) => (
                <li className={s.tagItem} key={tag}>
                  <Link href={PAGES.HOME} className={s.tagLink}>
                    {tag}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <p className={s.copyright}>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
    </footer>
  );
};
