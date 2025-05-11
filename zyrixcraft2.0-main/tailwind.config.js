/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'watch': '300px',    // Smartwatch breakpoint
        'xs': '375px',      // Small mobile breakpoint
        'sm': '576px',      // Mobile breakpoint
        'md': '768px',      // Tablet breakpoint
        'lg': '1024px',     // Desktop breakpoint
        'xl': '1440px',     // Large desktop
        '2xl': '1920px',    // Ultra-wide displays
        '3xl': '2560px',    // Super ultra-wide
      },
      fontSize: {
        'tiny': 'clamp(0.625rem, 0.6rem + 0.125vw, 0.75rem)',    // For very small screens
        'xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
        'sm': 'clamp(0.875rem, 0.8rem + 0.375vw, 1rem)',
        'base': 'clamp(1rem, 0.9rem + 0.5vw, 1.125rem)',
        'lg': 'clamp(1.125rem, 1rem + 0.625vw, 1.25rem)',
        'xl': 'clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem)',
        '2xl': 'clamp(1.5rem, 1.3rem + 1vw, 2rem)',
        '3xl': 'clamp(1.875rem, 1.6rem + 1.375vw, 2.5rem)',
        '4xl': 'clamp(2.25rem, 1.9rem + 1.75vw, 3rem)',
        '5xl': 'clamp(3rem, 2.5rem + 2.5vw, 4rem)',
        'display': 'clamp(3.5rem, 3rem + 3vw, 5rem)',
      },
      spacing: {
        'micro': 'clamp(0.25rem, 0.2rem + 0.25vw, 0.375rem)',
        'xs': 'clamp(0.5rem, 0.4rem + 0.5vw, 0.75rem)',
        'sm': 'clamp(0.75rem, 0.6rem + 0.75vw, 1rem)',
        'md': 'clamp(1rem, 0.8rem + 1vw, 1.5rem)',
        'lg': 'clamp(1.5rem, 1.2rem + 1.5vw, 2rem)',
        'xl': 'clamp(2rem, 1.6rem + 2vw, 3rem)',
        '2xl': 'clamp(2.5rem, 2rem + 2.5vw, 4rem)',
        '3xl': 'clamp(3rem, 2.4rem + 3vw, 5rem)',
      },
      container: {
        center: true,
        padding: {
          'watch': '0.5rem',
          'xs': '1rem',
          'sm': '1.5rem',
          'md': '2rem',
          'lg': '2.5rem',
          'xl': '3rem',
        },
      },
    },
  },
  plugins: [],
}