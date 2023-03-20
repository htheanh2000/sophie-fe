/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['supermomos-app-resources-us.s3.amazonaws.com'],
  },
  i18n: {
    locales: ['en', 'vi'],
    defaultLocale: 'en',
  },
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: 'next/font/google', options: { subsets: ['latin'] } },
    ]
  },


}

module.exports = nextConfig
