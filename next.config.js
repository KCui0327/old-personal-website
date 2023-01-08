/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs-pages',
  assetPrefix: '/nextjs-pages',
}

module.exports = nextConfig
