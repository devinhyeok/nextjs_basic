# nextjs_basic

간단한 next.js 프로젝트

# gh-pages로 nextjs 프로젝트 배포 설정법

1. 라우터 깨짐 해결

   - next.config.js 수정

   ```
   /** @type {import('next').NextConfig} */
   const debug = process.env.NODE_ENV !== "production";
   const repository = "nodejs_basic"; // 여기에 프로젝트명 삽입

   const nextConfig = {
   reactStrictMode: true,
   assetPrefix: !debug ? `/${repository}/` : "", // production 경로
   trailingSlash: true, // 빌드시 폴더 구조 그대로 생성
   }

   module.exports = nextConfig
   ```
2. 이미지 깨짐 해결

   - config/config.js prefix 추가

   ```
   exportconstprefix =  
       process.env.NODE_ENV === "production"  
       ? "https://devinhyeok.github.io/nextjs_basic" // 이부분 수정
       : "";
   ```
   - 예제: prefix 붙혀서 사용

   ```
   import { prefix } from "../config/config";

   <Box1 
       style={{
           backgroundImage: `url(${prefix}/images/rending/rending1.jpg)`,
       }}
   >
   ```
3. 깃허브 액션 설정

   - [설정 영상](https://www.youtube.com/watch?v=dalXCXCIPHM)
