import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { CardMedia, CardContent, Card, CardActionArea } from "@material-ui/core"
import { Typography } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    details: {
        display: "flex",
        position: "absolute",
        flexDirection: "column",
        maxWidth: 920,
        marginLeft: 100,
    },

    img: {
        width: 180,
        height: 150,
        marginRight: "auto",
    },
    button: {
        paddingLeft: 0,
        paddingRight: 0,
        paddinTop: 2,
        paddinBottom: 2,
    },
}))

export default function CardComponent({ resource }) {
    const classes = useStyles()

    return (
        <Card
            variant="outlined"
            style={{ borderColor: "#666", padding: 10, margin: 10 }}
        >
            <CardActionArea
                className={classes.root}
                target="_blank"
                rel="noreferrer"
                href={resource.url}
            >
                <CardMedia
                    className={classes.img}
                    image={resource.imgPath}
                    title={resource.name}
                />
                <CardContent className={classes.details}>
                    <Typography
                        variant="h5"
                        style={{ fontWeight: "bold" }}
                        color="secondary"
                    >
                        {resource.name}
                    </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        {resource.domain}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {resource.desc}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
