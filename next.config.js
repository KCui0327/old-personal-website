/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/KCui0327.github.io',
  assetPrefix: '/KCui0327.github.io/',
}

module.exports = nextConfig
