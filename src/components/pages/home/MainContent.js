import React from "react"
import { Typography, Box, Divider } from "@material-ui/core"
import { Button } from "@material-ui/core"

const MainContent = () => {
    return (
        <Box style={{ width: 700 }}>
            <Typography
                color="secondary"
                variant="h1"
                style={{
                    fontWeight: "bold",
                    color: "#29C7AC",
                }}
            >
                EDUGUARDIAN
            </Typography>
            <Typography variant="h4" style={{ fontWeight: "bold" }}>
                The content aggregator you wish you had before!
            </Typography>
            <Divider style={{ marginTop: 20, marginBottom: 20, width: 500 }} />
            <Typography style={{ fontSize: 18 }}>
                EduGuardian hosts resources, covering several domains, all at
                one place, and boasts of offering on-point roadmaps to learn
                numerous trending technologies. Our aim is to provide top-notch
                content from the best sources, allowing learners to study and
                excel as Devs!
            </Typography>
            <Divider style={{ marginTop: 20, marginBottom: 20, width: 600 }} />

            <Box
                style={{
                    display: "flex",
                }}
            >
                <Typography>
                    <Button
                        style={{
                            color: "#333",
                        }}
                        color="secondary"
                        variant="contained"
                        href="/resources"
                    >
                        Resources
                    </Button>
                    <Button
                        style={{
                            marginLeft: 10,
                            color: "white",
                        }}
                        color="primary"
                        variant="outlined"
                        href="/roadmaps"
                    >
                        Roadmaps
                    </Button>
                </Typography>
            </Box>
        </Box>
    )
}

export default MainContent
