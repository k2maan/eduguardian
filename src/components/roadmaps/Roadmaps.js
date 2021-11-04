import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Card from "@material-ui/core/Card"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import Typography from "@material-ui/core/Typography"
import { Box, Grid } from "@material-ui/core"
import NavButton from "./NavButton"

const useStyles = makeStyles({
    root: {
        maxWidth: 400,
    },
})

export default function Roadmaps() {
    const classes = useStyles()

    return (
        <div>
            <Box py={8} textAlign="center">
                <Typography variant="h1" style={{ fontWeight: "bold" }}>
                    Roadmaps
                </Typography>
            </Box>
            <Box style={{ paddingTop: 0, marginTop: 0 }}>
                <Grid item xs={12} container spacing={0}>
                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://files.realpython.com/media/Newbie_Watermarked.a9319218252a.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        <NavButton
                                            btnName="Python Programming"
                                            url="/python"
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Get into the world of Pythom, an
                                        interpreted high-level general-purpose
                                        programming language. Explore scripting
                                        and web deve, and dwelve into important
                                        libraries such as pandas, numpy,
                                        tkinter.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191105192037/What-Are-The-Best-Resources-For-Competitive-Programming.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        <NavButton
                                            btnName="Competitive Programming"
                                            url="/cp"
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Learn what it takes to become a
                                        competitive programmer, a mind sport
                                        enthus, which inturn might open your
                                        gates to big prodcut based firms like
                                        the FAANGs.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://cdn.august.com.au/wp-content/uploads/2015/04/Allan_Get-Web-Developer-Savvy_header.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        <NavButton
                                            btnName="Frontend Dev Roadmap"
                                            url="/frontend"
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Explore frontend web development, one of
                                        the most in-demand skill a fresher can
                                        learn. Learn basic to advanced
                                        technologies and languages like HTML,
                                        CSS, JS, React, and more.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://www.9tutorials.org/wp-content/uploads/2019/02/1002676_3c6e_2.jpg"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        <NavButton
                                            btnName="Backend Dev Roadmap"
                                            url="/backend"
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Explore frontend web development, one of
                                        the most in-demand skill a fresher can
                                        learn. Learn basic to advanced
                                        technologies and languages like HTML,
                                        CSS, JS, React, and more.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://www.upgrad.com/blog/wp-content/uploads/2019/04/Untitled-2-02.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        Data Science (Coming Soon)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Data science is one of the hottest
                                        domains to explore right now. Exlpore
                                        the techniques one needs to accomplish
                                        scientific methods, algorithms and
                                        systems to extract knowledge and
                                        insights.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card
                            variant="outlined"
                            style={{
                                borderColor: "#666",
                                padding: 10,
                                margin: 10,
                            }}
                            className={classes.root}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="190"
                                    image="https://d540vms5r2s2d.cloudfront.net/mad/uploads/mad_blog_5e834bdc69de51585662940.png"
                                />
                                <CardContent>
                                    <Typography
                                        gutterBottom
                                        variant="h6"
                                        style={{ fontWeight: "bold" }}
                                        color="secondary"
                                    >
                                        Android Dev (Coming Soon)
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="textSecondary"
                                        component="p"
                                    >
                                        Android software development is the
                                        process by which applications are
                                        created for devices running the Android
                                        operating system. Check the roadmap for
                                        becoming a Android Ninja.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}
