import React from "react"
import { Button, Divider, makeStyles } from "@material-ui/core"
import { Box, Typography } from "@material-ui/core"
import MainContent from "./MainContent"
import mainImage from "../../../assets/images/main2.png"
const useStyles = makeStyles({
    root: {
        display: "flex",
        paddingTop: 150,
        margin: 0,
    },
})
const Home = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <MainContent />
            <img
                src={mainImage}
                alt="illustration"
                style={{
                    width: "480px",
                    marginTop: 20,
                    marginLeft: 30,
                    padding: 0,
                }}
            />
        </Box>
    )
}

export default Home
