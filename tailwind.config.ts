import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{css,scss}",
    "./app/routes/**/*.{js,ts,jsx,tsx}",
    "./app/components/**/*.{js,ts,jsx,tsx}",
    "./app/layouts/**/*.{js,ts,jsx,tsx}",
    "./app/root.tsx",
    "./app/routes.ts"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

