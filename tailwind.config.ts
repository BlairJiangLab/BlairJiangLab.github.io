import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        serif: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      colors: {
        bg: {
          DEFAULT: '#FAFAF7',
          dark: '#0E0E0C',
        },
        fg: {
          DEFAULT: '#1A1A17',
          dark: '#F5F2EC',
        },
        muted: {
          DEFAULT: '#6B6B65',
          dark: '#A09E96',
        },
        border: {
          DEFAULT: '#E5E2DA',
          dark: '#2A2A26',
        },
        accent: {
          DEFAULT: '#D2543A',
          dark: '#E97559',
        },
        card: {
          DEFAULT: '#FFFFFF',
          dark: '#161613',
        },
      },
      maxWidth: {
        prose: '68ch',
      },
      typography: {},
    },
  },
  plugins: [],
};

export default config;
