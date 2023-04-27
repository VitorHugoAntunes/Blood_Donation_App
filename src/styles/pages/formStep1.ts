import { styled } from "@stitches/react";

export const FormContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    ".profileDiv": {
        width: "100%",
        height: "10rem",
        background: "$red300",
        display: "flex",
        justifyContent: "center",

        h2: {
            marginTop: "2rem",
            color: "$white",
        }
    },

    ".profilePictureDiv": {
        marginTop: "calc(-4.5rem)",
        width: "9rem",
        height: "9rem",
        border: "1px solid $gray100",
        background: "$white",
        borderRadius: "50%",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        img: {
            width: "95%",
            height: "95%",
            borderRadius: "50%",
        }
    },

    form: {
        width: "90vw",
        marginTop: "2rem",

        ".userLocationDiv": {
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: "1rem"
        }
    },

    label: {
        color: "$gray700"
    },

    input: {
        width: "100%",
        paddingLeft: "1rem",
        height: "3.5rem",
        fontSize: "$2x",
        background: "$white",
        color: "$gray500",
        fontWeight: "bold",
        borderRadius: "8px",
        marginTop: "0.5rem",
        marginBottom: "0.5rem",
        border: "1px solid $gray100"
    },

    button: {
        width: "100%",
        height: "3.5rem",
        fontSize: "$2x",
        background: "$red300",
        color: "$white",
        fontWeight: "bold",
        borderRadius: "8px",
        marginTop: "3rem",
    },
})