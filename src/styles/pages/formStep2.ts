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
            marginBottom: "2rem",
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

    '.toggleGroup': {
        marginTop: "2rem",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "2rem",
        rowGap: "2rem",

        ".toggleItem": {
            width: "10rem",
            height: "10rem",
            fontSize: "$2x",
            background: "$red100",
            color: "$red300",
            fontWeight: "bold",
            borderRadius: "8px",
        },

        "> .toggleItem[data-state='on']": {
            background: "$red300",
            color: "$red100"
        }
    },

    '.toggleGroup2': {
        marginTop: "2rem",
        columnGap: "2rem",
        rowGap: "2rem",
        display: "flex",
        justifyContent: "center",

        ".toggleItem": {
            width: "5rem",
            height: "5rem",
            fontSize: "$2x",
            background: "$red100",
            color: "$red300",
            fontWeight: "bold",
            borderRadius: "8px",
        },

        "> .toggleItem[data-state='on']": {
            background: "$red300",
            color: "$red100"
        }
    },

    "button[type='submit']": {
        width: "100%",
        height: "3.5rem",
        fontSize: "$2x",
        background: "$red300",
        color: "$white",
        fontWeight: "bold",
        borderRadius: "8px",
        marginTop: "3rem",
    }
})