// tailwind.config.ts
import type { Config } from 'tailwindcss';
import forms from '@tailwindcss/forms';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Custom grid templates
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },

      // Custom color palette
      colors: {
        blue: {
          50: '#E6F0FF',    // Light background
          100: '#CCE0FF',   // Card sections
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#2589FE',   // Custom primary hover / highlight
          500: '#0070F3',   // Brand primary
          600: '#2F6FEB',   // Slightly darker
          700: '#0053C7',
          800: '#003C99',
          900: '#002966',
        },
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },

      // Custom animations
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },

      // Optional: You can add default fonts here
      fontFamily: {
        lusitana: ['Lusitana', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [forms],
};

export default config;