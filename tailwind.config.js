/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import aspectRatio from '@tailwindcss/aspect-ratio'
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src/components/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      colors: {
        primary: {
          hover: '#8e44ad',
          main: '#9b59b6'
        },
        info: {
          hover: '#2980b9',
          main: '#3498db'
        },
        success: {
          hover: '#27ae60',
          main: '#2ecc71'
        },
        warning: {
          hover: '#f39c12',
          main: '#f1c40f'
        },
        dark: {
          hover: '#2c3e50',
          main: '#34495e'
        },
        danger: {
          hover: '#c0392b',
          main: '#e74c3c'
        },
        secondary: {
          hover: '#7f8c8d',
          main: '#95a5a6'
        },
        light: {
          hover: '#bdc3c7',
          main: '#ecf0f1'
        }
      }
    }
  },
  plugins: [typography, forms, aspectRatio]
}
