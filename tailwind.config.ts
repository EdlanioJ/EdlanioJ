import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      colors: {
        teal: {
          '500': '#00ADB5',
        },
        orange: {
          '500': '#ee6c4d',
        },

        gray: {
          '50': '#EEEEEE',
          '500': '#393E46',
          '900': '#222831',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
