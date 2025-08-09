/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './packages/ui/block/**/**/*.{js,ts,jsx,tsx,mdx}',
    './packages/ui/block/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/**/*.{js,ts,jsx,tsx,mdx}',
    './block/**/**/*.{js,ts,jsx,tsx,mdx}', // Ensure all files inside `packages/ui` are scanned
    // If you have other folders you want to scan outside `packages/ui`, add them here
  ],
  // theme: {
  //   extend: {
  //     colors: {
  //       background: "var(--background)",
  //       foreground: "var(--foreground)",
  //     },
  //   },
  // },
  plugins: [],
};
