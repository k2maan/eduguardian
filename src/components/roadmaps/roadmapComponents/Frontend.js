import React from "react"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import NavigationRoundedIcon from "@material-ui/icons/NavigationRounded"
const useStyles = makeStyles({
    root: {
        // minWidth: 300,
        maxWidth: 700,
        textAlign: "left",
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
})

export default function SimpleCard() {
    const classes = useStyles()

    return (
        <Box py={12} textAlign="center">
            <Typography
                gutterBottom
                variant="h3"
                style={{ fontWeight: "bold" }}
                color="secondary"
            >
                Frontend Dev Roadmap
            </Typography>
            <Box
                style={{
                    marginLeft: 255,
                }}
                py={4}
            >
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            Internet
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- How does internet work
                            <br />
                            <br />
                            -- What is HTTP?
                            <br />
                            <br />
                            -- What is DNS?
                            <br />
                            <br />
                            -- What is Domain Name
                            <br />
                            <br />
                            -- What is hosting?
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            The Basics
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- HTML
                            <br />
                            &emsp;&emsp;--- Basics
                            <br />
                            &emsp;&emsp;--- Forms and Validation
                            <br />
                            &emsp;&emsp;--- Conventions and Best Practices
                            <br />
                            <br />
                            -- CSS
                            <br />
                            &emsp;&emsp;--- Basics
                            <br />
                            &emsp;&emsp;--- Making layouts - Float, Position,
                            Display, Box Model, Grid, Flexbox
                            <br />
                            &emsp;&emsp;--- Responsive design and Media Queries
                            <br />
                            <br />
                            -- JavaScript
                            <br />
                            &emsp;&emsp;--- Syntax and Basics
                            <br />
                            &emsp;&emsp;--- DOM Manipulation
                            <br />
                            &emsp;&emsp;--- Fetch API / Ajax
                            <br />
                            &emsp;&emsp;--- ES6+ and Modular JS
                            <br />
                            &emsp;&emsp;--- Understand Hoisting, Event Bubbling,
                            Scope, Prototype, use-strict, Shadow DOM
                            <br />
                            <br />
                            -- More
                            <br />
                            &emsp;&emsp;--- Basics of Web Security - HTTPS,
                            CORS, Content Security Policy
                            <br />
                            <br />
                            -- Package Managers
                            <br />
                            &emsp;&emsp;--- npm
                            <br />
                            &emsp;&emsp;--- yarn
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            Version Control and Repo Hosting
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Basics of Git
                            <br />
                            <br />
                            -- GitHub
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            Framework
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Pick a framework
                            <br />
                            &emsp;&emsp;--- React (Preferred)
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- State Management -
                            Redux
                            <br />
                            &emsp;&emsp;--- Angular
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- State Management -
                            RexJS or NgRx
                            <br />
                            &emsp;&emsp;--- Vue
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- State Management - VueX
                            <br />
                            <br />
                            -- Build Tools
                            <br />
                            &emsp;&emsp;--- npm scripts
                            <br />
                            &emsp;&emsp;--- Prettier
                            <br />
                            &emsp;&emsp;--- ESLint
                            <br />
                            &emsp;&emsp;--- Webpack
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            More CSS
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Sass
                            <br />
                            <br />
                            -- PostCSS
                            <br />
                            <br />
                            -- Styled Components
                            <br />
                            <br />
                            -- CSS Modules
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            CSS Frameworks
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- MaterialUI (Preferred)
                            <br />
                            <br />
                            -- Reactstrap
                            <br />
                            <br />
                            -- Tailwind CSS
                            <br />
                            <br />
                            -- Chakra UI
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            Testing
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Jest
                            <br />
                            <br />
                            -- react-testing-library
                            <br />
                            <br />
                            -- Cypress
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationRoundedIcon
                    color="primary"
                    style={{
                        fontSize: 72,
                        marginRight: 255,
                        transform: "rotate(-180deg)",
                    }}
                />
                <Card
                    className={classes.root}
                    variant="outlined"
                    style={{
                        borderColor: "#666",
                        padding: 10,
                        margin: 10,
                        marginTop: 10,
                    }}
                >
                    <CardContent>
                        <Typography style={{ fontWeight: "bold" }} variant="h4">
                            Go More Advance
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Progressive Web Apps (PWAs)
                            <br />
                            <br />
                            -- Server Side Rendering
                            <br />
                            &emsp;&emsp;--- NextJS (React)
                            <br />
                            &emsp;&emsp;--- Universal (Angular)
                            <br />
                            &emsp;&emsp;--- Vue (NuxtJS)
                            <br />
                            <br />
                            -- GraphQL and Apollo
                            <br />
                            <br />
                            -- GatsbyJS (Static Site Generator)
                            <br />
                            <br />
                            -- Frontend Mobile Dev
                            <br />
                            &emsp;&emsp;--- React Native
                            <br />
                            &emsp;&emsp;--- Flutter
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
