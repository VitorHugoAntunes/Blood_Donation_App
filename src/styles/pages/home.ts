import { styled } from "@/styles/styles";

export const HomeContainer = styled('div', {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "1.5rem",
    scrollbarWidth: "none",
})

export const TopContainer = styled('div', {
    width: "100%",
    minHeight: "10rem",
    background: "$red300",
    display: "flex",
    flexDirection: "column",
    padding: "0 1rem",
    gap: "1rem",

    "> div:first-child": {
        marginTop: "2rem"
    },

    "> div": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",

        input: {
            height: "3rem",
            width: "100%",
            borderRadius: "32px",
            border: "none",
            padding: "0 3rem",
            fontSize: "$2x",
            fontWeight: "bold",
            color: "$gray500"
        },

        "&.navigationDiv": {
            position: "relative",
            button: {
                background: "none",

                svg: {
                    color: "$white"
                },


                "&:hover": {
                    filter: "brightness(0.9)"
                }
            },

            ".menuDiv": {
                position: "fixed",
                zIndex: "10",
                width: "15rem",
                height: "100vh",
                background: "$red300",
                display: "none",
                padding: "2rem 1rem",
                top: 0,
                left: 0,

                button: {
                    marginTop: "0.4rem",
                },

                "&.open": {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    justifyContent: "space-between",

                    "> div": {
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "start",

                        a: {
                            marginTop: "1rem",
                            color: "$white",
                            textDecoration: "none"
                        },

                    },


                    span: {
                        alignSelf: "center",
                        color: "$white",
                    }
                }
            },

            h2: {
                color: "$white"
            },

            ".profile": {
                background: "$white",
                width: "2rem",
                height: "2rem",
                borderRadius: "50px",

                position: "relative",

                img: {
                    width: "100%",
                    height: "100%",
                    borderRadius: "50px",
                    cursor: "pointer",

                    "&:hover": {
                        filter: "brightness(0.9)"
                    }
                },

                ".profileMenuOptions": {
                    position: "absolute",
                    display: "none",

                    "&.open": {
                        display: "flex",
                        flexDirection: "column",
                        background: "$white",
                        right: 0,
                        zIndex: 10,
                        padding: "1.5rem 1rem",
                        width: "20rem",
                        borderRadius: "4px",
                        border: "1px solid $gray500",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",

                        a: {
                            textDecoration: "none",
                            color: "$gray700",

                            "&:hover": {
                                color: "$gray500"
                            }
                        }
                    }
                }
            }
        },

        "&.searchBar": {
            position: "relative",

            svg: {
                position: "absolute",
                left: "1rem",
                color: "$gray500"
            }
        }
    }
})

export const ListContainer = styled('div', {
    width: "90vw",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",

    ".buttonsDiv": {
        display: "flex",
        justifyContent: "space-between",

        button: {
            background: "$red300",
            width: "2.3rem",
            height: "2.3rem",
            borderRadius: "4px",
            color: "$white",
            fontSize: "1rem",

            "&:hover": {
                filter: "brightness(0.9)"
            }
        },

        ".toggleItem[data-state='on']": {
            "-moz-transition": "background 0.1s ease-in-out, color 0.1s ease-in-out",
            background: "$red100",
            color: "$red300"
        }
    },

    ".usersDiv": {
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        marginBottom: "2rem",

        ".loadingDiv": {
            width: "fit-content",
            alignSelf: "center",

            span: {
                fontWeight: "bold"
            }
        },

        "> div": {
            display: "flex",
            background: "$red100",
            borderRadius: "8px",
            padding: "1rem 1rem",

            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",

            "> div:first-child": {
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "1rem",

                img: {
                    height: "5rem",
                    width: "5rem",
                },

                "> div": {
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",

                    h4: {
                        fontSize: "$md",
                        color: "$gray700"
                    },

                    span: {
                        color: "$gray700",
                    }
                }
            },

            "> div:not(first-child)": {
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-between",

                ".userBloodType": {
                    color: "$red300",
                    fontSize: "$lg"
                },

                button: {
                    borderRadius: "50%",
                    padding: "0.5rem",
                    background: "$red200",

                    svg: {
                        color: "$red300"
                    }
                }
            },

        },

    }
})