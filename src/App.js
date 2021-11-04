import { Container, Box, CssBaseline } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import theme from "./theme"
import NavBar from "./components/layout/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Resources from "./components/pages/resources/Resources"
import Roadmaps from "./components/roadmaps/Roadmaps"
import Python from "./components/roadmaps/roadmapComponents/Python"
import CP from "./components/roadmaps/roadmapComponents/CP"
import Mobile from "./components/pages/home/Mobile"
import { useState, useEffect } from "react"
const useStyles = makeStyles((theme) => ({
    // add some styles
}))

function App() {
    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1200

    useEffect(() => {
        window.addEventListener("resize", () => setWidth(window.innerWidth))
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
