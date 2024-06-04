import type { Config } from "tailwindcss";
import pluginFlow from "@halvaradop/tailwindcss-flow"

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/src/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    future: {
        hoverOnlyWhenSupported: true
    },
    theme: {
        colors: {
            primary: {
                black: "#14181F",
                green: "#56FFA6",
                grey: {
                    100: "#2B303B",
                    200: "#202731",
                    300: "#C4D3ED",
                },
            },
        },
        keyframes: {
            "accordion-down": {
                from: { height: "0" },
                to: { height: "var(--radix-accordion-content-height)" },
            },
            "accordion-up": {
                from: { height: "var(--radix-accordion-content-height)" },
                to: { height: "0" },
            },
        },
        animation: {
            "accordion-down": "accordion-down 0.2s ease-out",
            "accordion-up": "accordion-up 0.2s ease-out",
        },
    },
    plugins: [
        pluginFlow
    ],
};
export default config;
