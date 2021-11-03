import React from "react"
import { Button, Divider, makeStyles } from "@material-ui/core"
import { Box, Typography } from "@material-ui/core"
import MainContent from "./MainContent"
const useStyles = makeStyles({
    // root: {
    //     display: "flex",
    // },
})
const Home = () => {
    const classes = useStyles()
    return (
        <Box py={18} className={classes.root}>
            <MainContent />
        </Box>
    )
}

export default Home
