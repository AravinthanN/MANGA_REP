/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [],
    darkMode: "class",
    theme: {
        colors: {
            black: "#000",
            white: "#FFF",

            current: "currentColor",
            transparent: "transparent",
            inherit: "inherit",

            error: "#B00020",
            "error-light": "#FFF2F5",
            info: "#005FB3",
            "info-light": "#EFF6FD",
            success: "#00804A",
            "success-light": "#EDFDF6",
            warning: "#B35900",
            "warning-light": "#FFF8E5",

            link: "#3F51B5",
            "input-active": "#304FFE",
            "tab-active": "#FF007B",

            icon: {
                active: "#D50000",
                DEFAULT: "#343434",
                favorite: "#FF3366",
            },

            scrollHover: "#ff3366",
            scrollTrack: "#f2f2f2",
            scrollTrackBorder: "#cacaca",

            c1: "#323232",
            c2: "#4285F4",
            c3: "#DB4437",
            c4: "#212529",
            c5: "#F4B400",
            c6: "#0F9D58",
            c7: "#78cc6d1a",
            c8: "#4285F4",
            c9: "#EE0D08",
            c10: "#EEEDE4",
            c11: "#ffb606",
            c12: "#495057",
            c13: "#878a99",
            c14: "#0AB39C",
            c15: "#F06548",

            gray: {
                light: {
                    100: "#FAFAFA",
                    200: "#F2F2F2",
                    300: "#E2E2E2",
                },
                medium: {
                    100: "#CCCCCC",
                    200: "#949494",
                },
                dark: {
                    100: "#767676",
                    200: "#5C5C5C",
                    300: "#343434",
                },
            },
        },
        screens: {
            sm: "576px",
            md: "768px",
            lg: "992px",
            xl: "1200px",
        },
        extend: {
            boxShadow: {
                input: "0 6px 10px 0 rgba(0, 0, 0, 0.12)",
                profilecard: "10px 10px 15px #0000000d",
                treeBlock: "5px 10px #888888",
            },
            fontFamily: {
                sans: "var(--font-sans)",
                icomoon: "icomoon",
            },
            dropShadow: {
                tooltip: "2px 2px 2px rgba(52, 52, 52, 0.5)",
            },
            animation: {
                move: "move 25s linear infinite",
                progressActive:
                    "progressActive 2.4s cubic-bezier(0.23, 1, 0.32, 1) infinite",
            },
            keyframes: {
                move: {
                    "0%": {
                        transform: "translateY(0) rotate(0deg)",
                        opacity: "1",
                        borderRadius: "0",
                    },
                    "100%": {
                        transform: "translateY(-1000px) rotate(720deg)",
                        opacity: "0",
                        borderRadius: "50%",
                    },
                },
            },
        },
    },
    plugins: [],
};