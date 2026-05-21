/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/p_s_plan',
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
