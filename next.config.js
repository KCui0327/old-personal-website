/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '',
  assetPrefix: isProd ? 'https://kcui0327.github.io' : undefined,
}

module.exports = nextConfig
