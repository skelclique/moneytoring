/* eslint-disable @typescript-eslint/no-explicit-any */
import { colors } from './src/styles/theme'
import type { Config } from 'tailwindcss'

export default {
  // darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      textFillColor: (theme: any) => theme('colors'),
      colors: colors,
    },
  },
  plugins: [
    function ({ addUtilities, e, theme, variants }: any) {
      const colors = theme('colors')
      const textFillColors = Object.keys(colors).map((color) => {
        const value = colors[color]
        return {
          [`.${e(`text-fill-${color}`)}`]: {
            '-webkit-text-fill-color': value,
          },
        }
      })

      addUtilities(textFillColors, variants('textFillColor'))
    },
  ],
} satisfies Config
