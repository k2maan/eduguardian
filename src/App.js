import { Container, Box, CssBaseline } from "@material-ui/core"
import { ThemeProvider, makeStyles } from "@material-ui/core/styles"
import theme from "./theme"
import NavBar from "./components/layout/NavBar"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Home from "./components/pages/home/Home"
import Resources from "./components/pages/resources/Resources"
import Roadmaps from "./components/roadmaps/Roadmaps"
import Python from "./components/roadmaps/roadmapComponents/Python"
const useStyles = makeStyles((theme) => ({
    // add some styles
}))

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container component={Box} py={4}>
                    <NavBar />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/resources" component={Resources} />
                        <Route exact path="/roadmaps" component={Roadmaps} />
                        {/* Roadmaps must be defined here */}
                        <Route exact path="/python" component={Python} />
                    </Switch>
                </Container>
            </ThemeProvider>
        </BrowserRouter>
    )
}

export default App
