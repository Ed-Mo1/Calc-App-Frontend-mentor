/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadowColor: {
        "theme-1": {
          "grayish-orange": "hsl(28, 16%, 65%)",
          "key-shadow": "hsl(224, 28%, 35%)",
          "dark-red": "hsl(6, 70%, 34%)",
        },
        "theme-2": {
          "dark-grayish-orange": "hsl(35, 11%, 61%)",
          "key-shadow": "hsl(185, 58%, 25%)",
        },
      },
      colors: {
        // Theme 1
        "theme-1": {
          "main-background": "hsl(222, 26%, 31%)",
          "toggle-background": "hsl(223, 31%, 20%)",
          "screen-background": "hsl(224, 36%, 15%)",
          "key-background": "hsl(225, 21%, 49%)",
          red: "hsl(6, 63%, 50%)",
          "light-grayish-orange": "hsl(30, 25%, 89%)",
          "text-dark": "hsl(221, 14%, 31%)",
          white: "hsl(0, 0%, 100%)",
        },
        // Theme 2
        "theme-2": {
          "main-background": "hsl(0, 0%, 90%)",
          "toggle-background": "hsl(0, 5%, 81%)",
          "screen-background": "hsl(0, 0%, 93%)",
          "key-background": "hsl(185, 42%, 37%)",
          orange: "hsl(25, 98%, 40%)",
          "dark-orange": "hsl(25, 99%, 27%)",
          "light-grayish-yellow": "hsl(45, 7%, 89%)",
          "text-dark": "hsl(60, 10%, 19%)",
        },
        // Theme 3
        "theme-3": {
          "main-background": "hsl(268, 75%, 9%)",
          "toggle-background": "hsl(268, 71%, 12%)",
          "screen-background": "hsl(268, 71%, 12%)",
          "key-background": "hsl(281, 89%, 26%)",
          "key-shadow": "hsl(285, 91%, 52%)",
          cyan: "hsl(176, 100%, 44%)",
          "soft-cyan": "hsl(177, 92%, 70%)",
          "dark-magenta": "hsl(290, 70%, 36%)",
          "text-light": "hsl(52, 100%, 62%)",
          "text-very-dark-blue": "hsl(198, 20%, 13%)",
        },
      },
    },
  },
  plugins: [],
};
