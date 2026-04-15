/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand kit v4 tokens
        navy: {
          DEFAULT: '#0D1B2A',
          deep:    '#0D1B2A',
          surface: '#112336',
          raised:  '#1A2F42',
          card:    '#243447',
        },
        teal: {
          DEFAULT: '#00C4B4',
          bright:  '#17D4C2',
          dark:    '#009E91',
        },
        gold: {
          DEFAULT: '#BF9B30',
          bright:  '#D4AE45',
        },
        'gray-light':  '#F4F6F8',
        'gray-border': '#E0E8F0',
        'text-dark':   '#1A1A2A',
        'text-mid':    '#4A5568',
        'text-light':  '#718096',
        error: '#EF4444',
        // shadcn/ui compatibility — mapped to brand palette
        background: '#FFFFFF',
        foreground: '#1A1A2A',
        primary: {
          DEFAULT: '#00C4B4',
          foreground: '#0D1B2A',
        },
        secondary: {
          DEFAULT: '#0D1B2A',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#F4F6F8',
          foreground: '#718096',
        },
        accent: {
          DEFAULT: '#F4F6F8',
          foreground: '#0D1B2A',
        },
        destructive: {
          DEFAULT: '#EF4444',
          foreground: '#FFFFFF',
        },
        border: '#E0E8F0',
        input: '#E0E8F0',
        ring: '#00C4B4',
      },
      fontFamily: {
        head: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        sm:   '6px',
        md:   '12px',
        lg:   '16px',
        oval: '28px',
        pill: '9999px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.06)',
        md: '0 8px 24px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
