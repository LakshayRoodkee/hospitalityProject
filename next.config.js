/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
    experimental: {
    },
    images: {
      domains: [
        "res.cloudinary.com", 
        "avatars.githubusercontent.com",
        "lh3.googleusercontent.com"
      ]
    }
  }
  
  module.exports = nextConfig