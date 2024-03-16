/** @type {import('next').NextConfig} */

const path = require('path')

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async redirects() {
    // Redirect to /clock/stopwatch before other features are ready
    return [
      {
        source: '/',
        destination: '/clock/stopwatch',
        permanent: true,
      },
      {
        source: '/clock',
        destination: '/clock/stopwatch',
        permanent: true,
      },
    ]
  }
  // Will add i18n support in the future
  // i18n: {
  //   locales: ['en-US', 'zh-TW'],
  //   defaultLocale: 'en-US',
  //   domains: [
  //     // {
  //     //   domain: 'https://example.com',
  //     //   defaultLocale: 'en-US',
  //     // },
  //     // {
  //     //   domain: 'https://example.com.tw',
  //     //   defaultLocale: 'zh-TW',
  //     // },
  //   ],
  // },
}
 
module.exports = nextConfig
