import React from "react"
import { Button, Divider, makeStyles } from "@material-ui/core"
import { Box, Typography } from "@material-ui/core"
import MainContent from "./MainContent"
const useStyles = makeStyles({
    // root: {
    //     display: "flex",
    // },
})
const Home = () => {
    const classes = useStyles()
    return (
        <Box py={20} className={classes.root}>
            <MainContent />
            <Box py={22}>
                <Divider style={{ marginBottom: 30 }} />
                <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis provident recusandae ducimus accusantium,
                    excepturi officiis eaque ut debitis totam ab repellat
                    obcaecati expedita nulla officia eos! Tempora commodi
                    maxime, labore a ab corporis porro eum reprehenderit
                    pariatur consectetur quidem adipisci, aliquam dolor dolore
                    fugiat, modi enim voluptatum perferendis saepe voluptatem ex
                    animi laboriosam. Non eos sint hic cumque provident vitae
                    alias vero quasi accusamus nesciunt in atque quos, tenetur
                    cupiditate id repellat assumenda mollitia aspernatur
                    blanditiis voluptatibus modi quaerat deleniti fuga? Illum
                    impedit nam unde dicta itaque assumenda. Eos mollitia quos
                    veritatis nemo, sunt animi quidem corporis doloremque
                    architecto ex.
                </Typography>
                <br />
                <br />{" "}
                <Typography variant="p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Perferendis provident recusandae ducimus accusantium,
                    excepturi officiis eaque ut debitis totam ab repellat
                    obcaecati expedita nulla officia eos! Tempora commodi
                    maxime, labore a ab corporis porro eum reprehenderit
                    pariatur consectetur quidem adipisci, aliquam dolor dolore
                    fugiat, modi enim voluptatum perferendis saepe voluptatem ex
                    animi laboriosam. Non eos sint hic cumque provident vitae
                    alias vero quasi accusamus nesciunt in atque quos, tenetur
                    cupiditate id repellat fuga? Illum impedit nam unde dicta
                    itaque assumenda. Eos mollitia quos veritatis nemo, sunt
                    animi quidem corporis doloremque architecto ex.
                </Typography>
            </Box>
        </Box>
    )
}

export default Home
