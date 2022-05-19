module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["black", 
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "--rounded-btn": 0,
        },
      }
    ],
  },
}
