import { styled } from "@stitches/react";

export const FormContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    ".profileDiv": {
        width: "100vw",
        background: "$red300",
        display: "flex",
        justifyContent: "center",

        h2: {
            marginTop: "2rem",
            marginBottom: "6rem",
            color: "$white",
        }
    },

    ".profilePictureDiv": {
        marginTop: "calc(-4.5rem)",
        width: "9rem",
        height: "9rem",
        border: "1px solid $gray100",
        background: "$white",
        borderRadius: "50%"
    },

    form: {
        marginTop: "2rem",
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
        marginTop: "5rem",
    }
})