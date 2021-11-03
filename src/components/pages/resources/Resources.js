import React from "react"
import { Box } from "@material-ui/core"
import allData from "../../../data/all"
import Search from "../resources/Search"
import { Typography } from "@material-ui/core"

const Resources = () => {
    return (
        <Box py={8}>
            <Typography
                variant="h1"
                style={{ fontWeight: "bold", textAlign: "center" }}
            >
                Resources
            </Typography>
            <Box py={4}></Box>
            <Search details={allData} />
        </Box>
    )
}

export default Resources
