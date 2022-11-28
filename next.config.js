/** @type {import('next').NextConfig} */
const debug = process.env.NODE_ENV !== "production";
const repository = "nextjs_basic";
const API_KEY = process.env.API_KEY;

const nextConfig = {
  reactStrictMode: true,
  assetPrefix: !debug ? `/${repository}/` : "", // production 일때 prefix 경로
  trailingSlash: true, // 빌드 시 폴더 구조 그대로 생성하도록
  async redirects() {
    return [{
      source: "/old-blog/:path*",
      destination: "/new-sexy-blog/:path*",
      permanent: false,
    }];
  },
  async rewrites() {
    return [{
      source: "/api/movies",
      destination: `https://api.themoviedb.org/3/movie/popular?api_key=91bdbdba0633de9e766afe2f5b8b2316&language=en-US&page=1`,
    }];
  }
}

module.exports = nextConfig
