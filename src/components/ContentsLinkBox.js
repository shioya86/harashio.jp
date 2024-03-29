import {Grid, Typography, CardMedia, Stack} from "@mui/material";
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


function ContentsLinkBox(props) {
    const {cardTitle, url} = props;

    const handleClick = () => {
        window.open(url, "_blank");
    }

    return (
        <Grid item xs={4} md={3}>
            <Card
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    flexDirection: 'column',
                    boxShadow: "none",
                    textAlign: "center",
                }}
            >
                <CardContent>
                    <Stack
                        direction="column"
                        alignItems="center"
                        justify="center"
                    >
                        <CardMedia
                            sx={{ height: 80, width: 80, borderRadius: "40%"}}
                            image="https://www.blog.harashio.jp/wp-content/uploads/jZiHvbmc_400x400.jpg"
                            onClick={handleClick}
                            style={{
                                cursor: "pointer",
                            }}
                        />
                        <Typography
                            level="title-lg"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            whiteSpace="nowrap"
                            noWrap
                            style={{
                                display: "block",
                                fontSize: ".8em",
                                width: "80px",
                            }}
                        >
                            {cardTitle}
                        </Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Grid>
    );
}

export default ContentsLinkBox;