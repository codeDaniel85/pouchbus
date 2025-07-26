import { reactRouter } from "@react-router/dev/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss(), autoprefixer()],
    },
  },
  plugins: [reactRouter(), tsconfigPaths()],
  build: {
    rollupOptions: {
      external: [
        // 'react-email-starter/emails/welcome-user'를 외부 모듈로 지정
        'react-email-starter/emails/welcome-user',
        // 다른 외부화할 모듈이 있다면 여기에 추가
      ],
    },
  },
});
