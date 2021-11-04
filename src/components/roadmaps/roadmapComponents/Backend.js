import React from "react"
import { Typography, Box, Button } from "@material-ui/core"
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
                Backend Dev Roadmap
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
                            Basic Frontend
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- HTML
                            <br />
                            <br />
                            -- CSS
                            <br />
                            <br />
                            -- JavaScript
                            <br />
                            <br />
                            <Button
                                style={{
                                    margin: 0,
                                    color: "white",
                                }}
                                color="secondary"
                                variant="outlined"
                                href="/frontend"
                            >
                                Learn Frontend
                            </Button>
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
                            Basics of OS and Networking
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Basic Terminal Commands
                            <br />
                            <br />
                            -- How OS Works?
                            <br />
                            <br />
                            -- Basics of Threads, Concurrency, Process
                            Management, Memory Management
                            <br />
                            <br />
                            -- Basic Networking Concepts
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
                            Learn a Language
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- JavaScript (Preferred)
                            <br />
                            <br />
                            -- Python
                            <br />
                            <br />
                            -- Java
                            <br />
                            <br />
                            -- PHP
                            <br />
                            <br />
                            -- Go
                            <br />
                            <br />
                            -- C#
                            <br />
                            <br />
                            <Button
                                style={{
                                    margin: 0,
                                    color: "white",
                                }}
                                color="secondary"
                                variant="outlined"
                                href="/python"
                            >
                                Learn Python
                            </Button>
                        </Typography>
                    </CardContent>
                </Card>
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
                            Databases
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Relational Databases
                            <br />
                            &emsp;&emsp;--- PostgreSQL (Preferred)
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- MySQL
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- MS SQL
                            <br />
                            &emsp;&emsp;&emsp;&emsp; --- Oracle
                            <br />
                            <br />
                            -- NoSQL Databases
                            <br />
                            &emsp;&emsp;--- MongoDB (Preferred)
                            <br />
                            &emsp;&emsp;--- RethinkDB
                            <br />
                            &emsp;&emsp;--- CouchDB
                            <br />
                            <br />
                            -- More Concepts
                            <br />
                            &emsp;&emsp;--- Normalisation
                            <br />
                            &emsp;&emsp;--- Indexing
                            <br />
                            &emsp;&emsp;--- ORMS
                            <br />
                            &emsp;&emsp;--- Transactions
                            <br />
                            &emsp;&emsp;--- ACID
                            <br />
                            &emsp;&emsp;--- CAP Theorum
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
                            APIs
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- REST
                            <br />
                            <br />
                            -- JSON APIs
                            <br />
                            <br />
                            -- SOAP
                            <br />
                            <br />
                            -- Authentication
                            <br />
                            &emsp;&emsp;--- OAuth
                            <br />
                            &emsp;&emsp;--- Tokens
                            <br />
                            &emsp;&emsp;--- JWT
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
                            Caching and Web Security
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Caching
                            <br />
                            &emsp;&emsp;--- CDN
                            <br />
                            &emsp;&emsp;--- Redis
                            <br />
                            <br />
                            -- Web Security
                            <br />
                            &emsp;&emsp;--- HTTPS
                            <br />
                            &emsp;&emsp;--- CORS
                            <br />
                            &emsp;&emsp;--- SSL / TLS
                            <br />
                            &emsp;&emsp;--- Content Security Policy
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
                            -- Integration Testing
                            <br />
                            <br />
                            -- Unit Testing
                            <br />
                            <br />
                            -- Functional Testing Testing
                            <br />
                            <br />
                            -- Testing Libraries
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
                            More Backend
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Design Principles
                            <br />
                            &emsp;&emsp;--- SOLID
                            <br />
                            &emsp;&emsp;--- KISS
                            <br />
                            &emsp;&emsp;--- DRY
                            <br />
                            &emsp;&emsp;--- YAGNI
                            <br />
                            <br />
                            -- Architectural Patterns
                            <br />
                            &emsp;&emsp;--- Microservices
                            <br />
                            &emsp;&emsp;--- Monolithic Patterns
                            <br />
                            &emsp;&emsp;--- Serverless
                            <br />
                            &emsp;&emsp;--- SOA
                            <br />
                            <br />
                            -- CI / CD Basics
                            <br />
                            <br />
                            -- Containerisation and Virtualisation
                            <br />
                            &emsp;&emsp;--- Docker
                            <br />
                            <br />
                            -- GraphQL (Apollo)
                            <br />
                            <br />
                            -- Graph Databases
                            <br />
                            <br />
                            -- Web Servers
                            <br />
                            &emsp;&emsp;--- Nginx
                            <br />
                            &emsp;&emsp;--- Apache
                            <br />
                            &emsp;&emsp;--- Caddy
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
                            System Design
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Scaling
                            <br />
                            <br />
                            -- Migration Strategies
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
