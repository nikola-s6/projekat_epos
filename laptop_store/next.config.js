/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
/*  redirects: async() => {
    return [{
      source: '/start',
      destination: '/order',
      permanent: false,
    }]
  }*/
}

module.exports = nextConfig
