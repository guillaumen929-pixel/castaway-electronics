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
        // Brand tokens
        navy: {
          DEFAULT: '#1B2A3B',
          deep: '#0D1B2A',
          card: '#243447',
        },
        teal: {
          DEFAULT: '#00B4D8',
          dark: '#0099BB',
        },
        'gray-light': '#E3E7EE',
        'gray-border': '#E0E8F0',
        'text-dark': '#1A1A2A',
        'text-mid': '#4A5568',
        'text-light': '#718096',
        gold: '#BF9B30',
        // shadcn/ui compatibility — mapped to brand palette
        background: '#FFFFFF',
        foreground: '#1A1A2A',
        primary: {
          DEFAULT: '#00B4D8',
          foreground: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#1B2A3B',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#E3E7EE',
          foreground: '#718096',
        },
        accent: {
          DEFAULT: '#E3E7EE',
          foreground: '#1B2A3B',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#FFFFFF',
        },
        border: '#E0E8F0',
        input: '#E0E8F0',
        ring: '#00B4D8',
      },
      fontFamily: {
        head: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
      },
      boxShadow: {
        sm: '0 2px 8px rgba(0,0,0,0.06)',
        md: '0 8px 24px rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
}
