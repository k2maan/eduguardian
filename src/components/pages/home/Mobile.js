import React from "react"
import { Typography, Box, Divider } from "@material-ui/core"
import { Grid, makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 0,
        margin: 0,
    },
    box: {
        maxWidth: "80%",
        display: "block",
        alignItems: "center",
        textAlign: "center",
        margin: 20,
    },
}))

const Mobile = () => {
    const classes = useStyles()
    return (
        <Grid
            className={classes.root}
            spacing={0}
            alignItems="center"
            justify="center"
        >
            <Box py={15} className={classes.box}>
                <Typography
                    color="secondary"
                    variant="h4"
                    style={{ fontWeight: "bold" }}
                >
                    EDUGUARDIAN
                </Typography>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    The content aggregator you wish you had before!
                </Typography>
                <Divider
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                />
                <Typography
                    variant="h6"
                    style={{ color: "#ff8800", fontWeight: "bold" }}
                >
                    ⚠️ Ooops!
                    <br />
                    The website is currently unavailable on small screen
                    devices. Please switch to a laptop or dekstop.
                </Typography>
                <Divider
                    style={{
                        marginTop: 20,
                        marginBottom: 20,
                    }}
                />
            </Box>
        </Grid>
    )
}

export default Mobile
