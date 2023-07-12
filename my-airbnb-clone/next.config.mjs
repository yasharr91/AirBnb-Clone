
import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true,
    },
    images: {
      domains: [
        'res.cloudinary.com', 
        'avatars.githubusercontent.com',
        'lh3.googleusercontent.com'
      ]
    },
    reactStrictMode: true,
  }
  
  // module.exports = nextConfig
  export default million.next(nextConfig);
  
