import { addDynamicIconSelectors } from "@iconify/tailwind";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enable dark mode
  content: [
    "node_modules/flowbite-react/lib/esm/**/*.js",

    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        glow: ["0 0px 5px var(--color)", "0 0px 5px var(--color)"],
      },
      animation: {
        shimmer: "shimmer 2s linear infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
      keyframes: {
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
      colors: {
        primary: "var(--primary)",
        primaryContent: "var(--primaryContent)",
        primaryContentHover: "var(--primaryContentHover)",
        secondary: "var(--secondary)",
        secondaryContent: "var(--secondaryContent)",
        secondaryContentHover: "var(--secondaryContentHover)",
        warning: "var(--warning)",
        error: "var(--error)",
        primaryDark: "var(--primaryDark)",
        primaryContentHoverDark: "var(--primaryContentHoverDark)",
        secondaryDark: "var(--secondaryDark)",
        secondaryContentDark: "var(--secondaryContentDark)",
        secondaryContentHoverDark: "var(--secondaryContentHoverDark)",
        accentDark: "var(--accentDark)",
        BG: "var(--BG)",
        color: "var(--color)",
        warningDark: "var(--warningDark)",
        errorDark: "var(--errorDark)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [
    "prettier-plugin-tailwindcss",
    "flowbite/plugin",
    addDynamicIconSelectors(),
  ],
};
