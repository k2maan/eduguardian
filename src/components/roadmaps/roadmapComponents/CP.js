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
        <Box py={8} textAlign="center">
            <Typography
                gutterBottom
                variant="h3"
                style={{ fontWeight: "bold" }}
                color="secondary"
            >
                Competitive Programming Roadmap
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
                            Choose a Programming Language
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- If Beginner:
                            <br />
                            &emsp;&emsp;--- Go with C++
                            <br />
                            <br />
                            -- If already have decent command over a language:
                            <br />
                            &emsp;&emsp;--- Go with that language. Don't switch.
                            <br />
                            &emsp;&emsp;--- Programming language hardly makes a
                            difference.
                            <br />
                            <br />
                            -- Preferred:
                            <br />
                            &emsp;&emsp;--- C++, Java, or Python
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
                            Learn the basics
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Understand Syntax and Basics
                            <br />
                            <br />
                            -- Loops and Statements
                            <br />
                            <br />
                            -- Scope and Functions
                            <br />
                            <br />
                            -- How the code works
                            <br />
                            <br />
                            -- Concept of Time and Space Complexity
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
                            Beginner Data Structures
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Array
                            <br />
                            <br />
                            -- Limked List
                            <br />
                            <br />
                            -- Stack
                            <br />
                            <br />
                            -- Queue
                            <br />
                            <br />
                            -- Heap/Priority Queue
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
                            Intermediate Data Structures
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Tree
                            <br />
                            <br />
                            -- Binary Tree
                            <br />
                            <br />
                            -- Graphs
                            <br />
                            <br />
                            -- Union Find
                            <br />
                            <br />
                            -- Trie
                            <br />
                            <br />
                            -- Tree Map
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
                            Advanced Data Structures
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Segment Tree
                            <br />
                            <br />
                            -- Binary Indexed Tree
                            <br />
                            <br />
                            -- Suffix Array
                            <br />
                            <br />
                            -- Sparse Table
                            <br />
                            <br />
                            -- Range Tree
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
                            Algorithms Basics
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Reccurance Basics
                            <br />
                            <br />
                            -- Divide and Conquer
                            <br />
                            <br />
                            -- Time Complexeity Fixation
                            <br />
                            <br />
                            -- Pseudocodes Basics
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
                            Array/List Algorithms
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- KMP Algorithm
                            <br />
                            <br />
                            -- Kadane's Algorithm
                            <br />
                            <br />
                            -- Floyd's Cycle Detection Algorithm
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
                            Searching and Sorting
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Searching Algorithms
                            <br />
                            &emsp;&emsp;--- Linear Search
                            <br />
                            &emsp;&emsp;--- Binary Search
                            <br />
                            &emsp;&emsp;--- Jump Search
                            <br />
                            <br />
                            -- Sorting Algorithms
                            <br />
                            &emsp;&emsp;--- Bubble Sort
                            <br />
                            &emsp;&emsp;--- Insertion Sort
                            <br />
                            &emsp;&emsp;--- Merge Sort
                            <br />
                            &emsp;&emsp;--- Counting Sort
                            <br />
                            &emsp;&emsp;--- Quick Sort
                            <br />
                            &emsp;&emsp;--- Selection Sort
                            <br />
                            &emsp;&emsp;--- Heap Sort
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
                            Graph Alogrithms
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Depth-FIrst Search (DFS)
                            <br />
                            <br />
                            -- Breadth-FIrst Search (BFS)
                            <br />
                            <br />
                            -- Weighted Graph
                            <br />
                            <br />
                            -- Floyd-Warshall Algorithm
                            <br />
                            <br />
                            -- Dijkstra Algorithm
                            <br />
                            <br />
                            -- Connectivity of Graph
                            <br />
                            <br />
                            -- Spanning Tree and Minimum Spanning Tree (MST)
                            <br />
                            <br />
                            -- Prim's and Kruskal's Algorithm
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
                            String Algorithms
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- KMP Algorithm
                            <br />
                            <br />
                            -- Hamming Distance
                            <br />
                            <br />
                            -- String Hashing
                            <br />
                            <br />
                            -- Rabin Karp Algorithm
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
                            Tree Alogrithms
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Tree Traversals
                            <br />
                            &emsp;&emsp;--- Inorder
                            <br />
                            &emsp;&emsp;--- Preorder
                            <br />
                            &emsp;&emsp;--- Postorder
                            <br />
                            <br />
                            -- Binary Heap
                            <br />
                            <br />
                            -- Binary Search Tree (BST) Algorithms
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
                            Dynamic Programming
                        </Typography>
                        <Divider style={{ margin: 20 }} />
                        <Typography style={{ fontWeight: "bold" }} variant="p">
                            -- Min/Max Path to Reach a Target
                            <br />
                            <br />
                            -- Distinct Ways
                            <br />
                            <br />
                            -- Merging Intervals
                            <br />
                            <br />
                            -- DP on Strings
                            <br />
                            <br />
                            -- Decision Making
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </Box>
    )
}
