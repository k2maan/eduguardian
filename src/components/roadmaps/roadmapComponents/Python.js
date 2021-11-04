import React from "react"
import { Typography, Box } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardContent from "@material-ui/core/CardContent"
import Divider from "@material-ui/core/Divider"
import NavigationIcon from "@material-ui/icons/Navigation"
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
                Python Programming Roadmap
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
                            Introduction
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Python 2 vs Python 3
                            <br />
                            <br />
                            -- Python basic data-types
                            <br />
                            <br />
                            -- Variable assignment
                            <br />
                            <br />
                            -- Taking input
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Basic Data Structures in Python
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Strings
                            <br />
                            &emsp;&emsp;--- Introduction
                            <br />
                            &emsp;&emsp;--- Indexing and Slicing
                            <br />
                            &emsp;&emsp;--- String properties and methods
                            <br />
                            &emsp;&emsp;--- Print formatting with strings
                            <br />
                            <br />
                            -- Lists
                            <br />
                            &emsp;&emsp;--- List Slicing
                            <br />
                            &emsp;&emsp;--- List properties and methods
                            <br />
                            &emsp;&emsp;--- Nested Lists
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            More Data Structures
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Dictionary
                            <br />
                            &emsp;&emsp;--- Dictionary methods
                            <br />
                            &emsp;&emsp;--- Nested Dictionaries
                            <br />
                            <br />
                            -- Tuples
                            <br />
                            &emsp;&emsp;--- Tuple Methods
                            <br />
                            &emsp;&emsp;--- List vs Tuple
                            <br />
                            &emsp;&emsp;--- When to use Tuples
                            <br />
                            <br />
                            -- Sets
                            <br />
                            <br />
                            -- Booleans
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Files
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Writing a File
                            <br />
                            <br />
                            -- Opening a File
                            <br />
                            <br />
                            -- Appending a File
                            <br />
                            <br />
                            -- Iterating through a File
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Operators
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Comparison Operators
                            <br />
                            <br />
                            -- Chained Comparison Operators
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Control Statements
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- if-elif-else
                            <br />
                            <br />
                            -- Loops
                            <br />
                            &emsp;&emsp;--- for loop
                            <br />
                            &emsp;&emsp;--- while loop
                            <br />
                            <br />
                            -- Useful Operators
                            <br />
                            &emsp;&emsp;--- range
                            <br />
                            &emsp;&emsp;--- enumerate
                            <br />
                            &emsp;&emsp;--- zip
                            <br />
                            &emsp;&emsp;--- in - not in
                            <br />
                            &emsp;&emsp;--- random
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Comprehension
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- List Comprehensions
                            <br />
                            <br />
                            -- Nested List Comprehensions
                            <br />
                            <br />
                            -- Dictionary Comprehensions
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Functions
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Defining - Returing - Calling
                            <br />
                            <br />
                            -- args - kwargs
                            <br />
                            <br />
                            -- Lambda
                            <br />
                            <br />
                            -- map
                            <br />
                            <br />
                            -- filter
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Object Oriented Programming
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Objects
                            <br />
                            <br />
                            -- Class
                            <br />
                            <br />
                            -- Class Functions
                            <br />
                            <br />
                            -- Inheritance
                            <br />
                            <br />
                            -- Polymorphism
                            <br />
                            <br />
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Modules and Packages
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Importing and using modules and packages
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Error Handling
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Syntax Errors
                            <br />
                            <br />
                            -- Exceptions
                            <br />
                            <br />
                            -- Handling Exceptions
                            <br />
                            <br />
                            -- Raising Exceptions
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Generators and Decorators
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Generator Expressions
                            <br />
                            <br />
                            -- Decorators
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Advanced Python Modules
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Collections
                            <br />
                            <br />
                            -- Datetime
                            <br />
                            <br />
                            -- Math
                            <br />
                            <br />
                            -- Random
                            <br />
                            <br />
                            -- Regular Expression (re)
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Web Scraping
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Requests
                            <br />
                            <br />
                            -- BeautifulSoup (bs4)
                            <br />
                            <br />
                            -- Selenium
                        </Typography>
                    </CardContent>
                </Card>
                <NavigationIcon
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
                            Python GUI
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Tkinter
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
