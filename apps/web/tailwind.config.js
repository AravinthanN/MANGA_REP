// /** @type {import('tailwindcss').Config} */

// module.exports = {
//   content: [
//    "@/apps/web/app/**/*.{js,jsx,ts,tsx}",
//    "@/apps/webapp/**/**/*.{js,jsx,ts,tsx}",
//     'ui/block/**/**/*.{js,ts,jsx,tsx,mdx}',
//     'ui/**/**/**/*.{js,ts,jsx,tsx,mdx}',
//     'ui/**/**/*.{js,ts,jsx,tsx,mdx}',
//     'ui/block/**/*.{js,ts,jsx,tsx,mdx}',
//     './block/**/**/*.{js,ts,jsx,tsx,mdx}', // Ensure all files inside `packages/ui` are scanned
//     // If you have other folders you want to scan outside `packages/ui`, add them here
//   ],
//   // theme: {
//   //   extend: {
//   //     colors: {
//   //       background: "var(--background)",
//   //       foreground: "var(--foreground)",
//   //     },
//   //   },
//   // },
//   plugins: [],
// };
const {
  getPackageContent,
} = require('@manga/tailwind-config/helper/getPackageContent');

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('@manga/tailwind-config')],
  content: ['./app/**/*.{js,jsx,ts,tsx}', ...getPackageContent(['ui'])],
};
