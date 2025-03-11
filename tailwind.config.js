/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        sb1: "#00072D",
        sb2: "#001C55",
        sb3: "#0A2472",
        sb4: "#0E6BA8",
        sb5: "#A6E1FA",
      }
    },
  },
  plugins: [],
}