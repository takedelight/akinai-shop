import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    implementation: 'sass',
  },
};

export default nextConfig;
