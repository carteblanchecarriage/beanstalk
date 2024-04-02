const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      '127.0.0.1',
      'res.cloudinary.com',
      'media.graphassets.com',
      'lh7-us.googleusercontent.com',
      'us-east-1-shared-usea1-02.graphassets.com',
    ],
  },
};

module.exports = nextConfig;
