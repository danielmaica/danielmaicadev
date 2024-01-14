/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  theme: {
    extend: {
      boxShadow: {
        '3xl': 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }
    }
  }
}
