import React from "react"
import { Typography, AppBar, Toolbar, Button } from "@material-ui/core"
import { Link } from "react-router-dom"

const NavBar = () => {
    return (
        <div>
            <AppBar color="primary">
                <Toolbar style={{ marginLeft: 130, marginRight: 120 }}>
                    <Typography color="textPrimary" style={{ flexGrow: 1 }}>
                        <Typography
                            style={{
                                fontSize: 32,
                                color: "#333",
                                textDecoration: "none",
                                fontWeight: "bold",
                                fontFamily: "Arial",
                            }}
                            component={Link}
                            to="/"
                        >
                            EG
                        </Typography>
                    </Typography>

                    <Button
                        style={{
                            marginRight: 10,
                        }}
                        variant="outlined"
                        component={Link}
                        to="/resources"
                    >
                        Resources
                    </Button>
                    <Button
                        style={{
                            marginRight: 10,
                        }}
                        variant="outlined"
                        component={Link}
                        to="/roadmaps"
                    >
                        Roadmaps
                    </Button>
                    <Button
                        style={{
                            marginRight: 10,
                        }}
                        variant="outlined"
                        // for exrternal link, link does not work. use href only
                        href="https://k2maan.me/CodePenCloneReactJS/"
                        rel="noreferrer"
                        target="_blank"
                    >
                        Code Live!
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar
