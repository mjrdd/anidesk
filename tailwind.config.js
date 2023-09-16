import { join } from "path";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindPluginForms from "@tailwindcss/forms";
import { skeleton } from "@skeletonlabs/tw-plugin";
import classic from "./src/themes/classic";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    join(require.resolve("@skeletonlabs/skeleton"), "../**/*.{html,js,svelte,ts}")
  ],
  theme: {
    container: {
      center: true
    },
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: [
    tailwindPluginForms,
    skeleton({
      themes: { custom: [classic] }
    })
  ]
};
