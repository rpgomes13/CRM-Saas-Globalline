/** @type {import('next').NextConfig} */
const nextConfig = {
    output: `standalone`
  }
  module.exports = {
    env: {
      NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
  }
  module.exports = nextConfig