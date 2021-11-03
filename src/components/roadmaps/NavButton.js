import React from "react"
import { Link } from "react-router-dom"

import { Typography } from "@material-ui/core"
const NavButton = (props) => {
    return (
        <div>
            <Typography
                variant="h6"
                style={{ fontWeight: "bold" }}
                color="secondary"
                component={Link}
                to="/python"
            >
                {props.btnName}
            </Typography>
        </div>
    )
}

export default NavButton
