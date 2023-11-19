import {Avatar, Box, Stack, Typography} from "@mui/material";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import React from "react";

const getIcon = (type) => {
    if (type === "Hackathon") {
        return <DirectionsRunIcon/>
    } else if (type === "Contest") {
        return <InventoryIcon/>
    } else if (type === "Reward") {
        return <ArticleIcon/>
    } else {
        return <ArticleIcon/>
    }
}

const makeRewards = (reward) => {
    return (
        <div style={{float: "left"}}>
            <EmojiEventsIcon fontSize=".9em" style={{color: "#FFA500"}}/>
            <span style={{fontSize: ".9em"}}>
                {reward}
            </span>
        </div>
    );
}

function ActivityStack(props) {
    const {data} = props;

    return (
        <Box>
            {
                data.map((elem) =>
                   <Stack direction="row" spacing={2} style={{ marginBottom: "1em" }}>
                       <Avatar style={{backgroundColor: "#E9B251"}}>
                           {getIcon(elem.type)}
                       </Avatar>
                       <Stack direction="column">
                           <Typography>{elem.title}</Typography>

                           <Stack direction="row">
                               {
                                   elem.rewards.map((reward) =>
                                       makeRewards(reward)
                                   )
                               }
                           </Stack>

                           <Typography style={{ color: "#b0b0b0", fontSize: ".8em"}}>
                               {elem.description}
                           </Typography>
                       </Stack>
                   </Stack>
                )
            }
        </Box>
    );
}

export default ActivityStack;
