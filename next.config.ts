import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    implementation: 'sass',
  },
};

const withNextIntl = createNextIntlPlugin('./src/shared/configs/i18n/request.ts');

export default withNextIntl(nextConfig);
