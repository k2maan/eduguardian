import { Container, Box, CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core/styles"
import theme from "./theme"
import NavBar from "./components/layout/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Resources from "./components/pages/resources/Resources"
import Roadmaps from "./components/roadmaps/Roadmaps"
import Python from "./components/roadmaps/roadmapComponents/Python"
import CP from "./components/roadmaps/roadmapComponents/CP"
import Frontend from "./components/roadmaps/roadmapComponents/Frontend"
import Backend from "./components/roadmaps/roadmapComponents/Backend"

import Mobile from "./components/pages/home/Mobile"
import { useState, useEffect } from "react"

function App() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1200

    useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])
    return width > breakpoint ? (
        <div>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Container component={Box} py={4}>
                        <NavBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route
                                exact
                                path="/resources"
                                component={Resources}
                            />
                            <Route
                                exact
                                path="/roadmaps"
                                component={Roadmaps}
                            />
                            {/* Roadmaps must be defined here */}
                            <Route exact path="/python" component={Python} />
                            <Route exact path="/cp" component={CP} />
                            <Route
                                exact
                                path="/frontend"
                                component={Frontend}
                            />
                            <Route exact path="/backend" component={Backend} />
                        </Switch>
                    </Container>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    ) : (
        <Mobile />
    )
}

export default App
