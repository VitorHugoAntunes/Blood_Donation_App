import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        outline: 'none',
    },

    body: {
        backgroundColor: '$white',
        '-webkit-font-smoothing': 'antialiased',
        maxWidth: "90vw",
        maxHeight: "100vh",
        marginLeft: "auto",
        marginRight: "auto",
    },

    'body, input, textarea, button': {
        fontFamily: 'Poppins',
        fontWeight: 400,
    },

    'button': {
        padding: 0,
        border: "none",
        margin: 0,
        cursor: "pointer",
        lineHeight: 0
    },
})