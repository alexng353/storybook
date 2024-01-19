import type { Config } from "tailwindcss";
import tailwind_colors from "tailwindcss/colors";
import plugin from "tailwindcss/plugin";
import withMT from "@material-tailwind/react/utils/withMT";
import hideScrollbar from "tailwind-scrollbar-hide";
import { withTV } from "tailwind-variants/transformer";
import { colors } from "src/colors";

export default withTV(
  withMT({
    content: ["./src/**/*.{tsx,ts,jsx,js}"],
    theme: {
      extend: {
        fontFamily: {
          // I like Inter. Change it to your own font.
          primary: ["Inter", "sans-serif"],
          inter: ["Inter", "sans-serif"],
          poppins: ["Poppins", "sans-serif"],
          palanquin: ["Palanquin", "sans-serif"],
          heebo: ["Heebo", "sans-serif"],
          maven: ["Maven Pro", "sans-serif"],
          caveat: ["Caveat", "cursive"],
          consolas: ["Inconsolata", "monospace"],
        },
        colors: {
          ...colors,
          ...tailwind_colors,
        },
        keyframes: {
          "fade-in": {
            "0%": { opacity: "0%" },
            "100%": { opacity: "100%" },
          },
          "zoom-hr": {
            "0%": { transform: "scaleX(0)" },
            "100%": { transform: "scaleX(1)" },
          },
          "infinite-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(calc(-1750px))" },
          },
        },
        animation: {
          "fade-in": "fade-in .4s ease-in-out forwards",
          "zoom-hr": "zoom-hr .15s ease-in-out forwards",
          "infinite-scroll": "infinite-scroll 15s linear infinite",
        },
        fontSize: {
          xxs: "7px",
          xs: "10px",
          tn: "12px",
        },

        width: {
          128: "32rem",
          160: "40rem",
          192: "48rem",
          256: "64rem",
          320: "80rem",
          384: "96rem",
        },
        height: {
          128: "32rem",
          160: "40rem",
          192: "48rem",
          256: "64rem",
          320: "80rem",
          384: "96rem",
        },
        spacing: {
          128: "32rem",
          160: "40rem",
          192: "48rem",
          256: "64rem",
          320: "80rem",
          384: "96rem",
        },
        boxShadow: {
          DEFAULT: "0 4px 10px 0 rgba(0, 0, 0, 0.12)",
          1: "0px 1px 3px 0px rgba(0, 0, 0, 0.08)",
          2: "0px 1px 4px 0px rgba(0, 0, 0, 0.12)",
          3: "0px 1px 5px 0px rgba(0, 0, 0, 0.14)",
          4: "0px 1px 10px 0px rgba(0, 0, 0, 0.12)",
        },
        borderRadius: {
          "10px": "10px",
          custom: "40px",
        },
        inset: {
          "6px": "6px",
        },
        screens: {
          tn: "320px",
        },
      },
    },
    plugins: [
      hideScrollbar,
      plugin(function({ addUtilities }) {
        addUtilities({
          /* Hide scrollbar for Chrome, Safari and Opera */
          ".no-scrollbar::-webkit-scrollbar": {
            display: "none",
          },

          /* Hide scrollbar for IE, Edge and Firefox */
          ".no-scrollbar": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
        });
      }),
    ],
  } satisfies Config) as Config
);
