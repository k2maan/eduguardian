import { createTheme } from "@material-ui/core/styles"

const theme = createTheme({
    palette: {
        type: "dark",

        primary: {
            main: "#1597BB",
        },
        secondary: {
            main: "#29C7AC",
        },
    },
    typography: {
        fontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(","),
    },
    overrides: {
        // Style sheet name
        // Write component name for style overrides

        MuiCssBaseline: {
            "@global": {
                // wirte global styling here
            },
        },
    },
    // set default props of any component
    props: {
        // Name of the component ⚛️
    },
})

export default theme
