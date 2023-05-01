import { styled } from "@stitches/react";

export const InitialContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    width: "90vw",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "2rem",
    alignItems: "center",

    a: {
        fontSize: "1rem",
        textDecoration: "none",
        color: "$gray900"
    },

    img: {
        scale: "70%"
    },

    "& > div:first-child": {
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },

    h1: {
        color: "$gray900"
    },

    p: {
        marginTop: "1rem",
        color: "$gray500",
        textAlign: "center",
    },

    button: {
        width: "100%",
        height: "3.5rem",
        fontSize: "$2x",
        background: "$red300",
        color: "$white",
        fontWeight: "bold",
        borderRadius: "8px",
        marginTop: "5rem",

        "&:hover": {
            filter: "brightness(0.9)"
        }
    },

    "> div": {
        marginTop: "1rem",
        display: "flex",
        gap: "0.8rem",

        ".position": {
            height: "0.8rem",
            borderRadius: "50%",
            "-moz-transition": "background 0.2s ease-in-out, width 0.2s ease-in-out",
            background: "$red100",
            width: "0.8rem",
        },

        ".active": {
            height: "0.8rem",
            borderRadius: "16px",
            "-moz-transition": "background 0.2s ease-in-out, width 0.2s ease-in-out",
            background: "$red300",
            width: "3rem",
        },
    },

    "> div.actionsDiv": {
        width: "100%",

        "button.invisible": {
            display: "none"
        }
    }
})