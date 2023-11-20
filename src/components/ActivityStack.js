import {Avatar, Box, Link, Stack, Typography} from "@mui/material";
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';
import ArticleIcon from '@mui/icons-material/Article';
import InventoryIcon from '@mui/icons-material/Inventory';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import React from "react";

const getIcon = (type) => {
  if (type === "Hackathon") {
    return <DirectionsRunIcon/>
  } else if (type === "Contest") {
    return <InventoryIcon/>
  } else if (type === "Reward") {
    return <ArticleIcon/>
  } else if (type === "Work") {
    return <MeetingRoomIcon/>;
  } else {
    return <ArticleIcon/>
  }
}

const makeRewards = (reward) => {
    return (
        <Typography>
            <EmojiEventsIcon fontSize=".9em" style={{color: "#FFA500"}}/>
            <span style={{fontSize: ".9em"}}>
                {reward}
            </span>
        </Typography>
    );
}

const handleClick = (url) => {
  if (url === "") return;
  window.open(url, "_blank");
}

function ActivityStack(props) {
    const {data} = props;

    return (
        <Box>
            {
                data.map((elem) =>
                   <Stack direction="row" spacing={2} style={{ marginBottom: "1em" }}>
                       <Avatar style={{backgroundColor: "#BDBDBD"}}>
                           {getIcon(elem.type)}
                       </Avatar>
                       <Stack
                           direction="column"
                           style={elem.url === "" ? {} : { cursor: "pointer" }}
                           onClick={() => handleClick(elem.url)}
                       >
                           <Typography>
                               {elem.title}
                           </Typography>

                           <Stack direction="row">
                               <Typography
                                   sx={{ backgroundColor: "#000000", color: "#FFFFFF", padding: "0 5px 0 5px" }}
                               >
                                   { elem.date }
                               </Typography>
                               {
                                   elem.rewards.map((reward) =>
                                       makeRewards(reward)
                                   )
                               }
                           </Stack>

                           <Typography style={{ color: "#BDBDBD", fontSize: ".8em"}}>
                               <span style={{ paddingRight: ".5em"}}>
                                    {
                                        elem.url === "" ? <></> : <Link href={elem.url}>link</Link>
                                    }
                               </span>
                               - {elem.description}
                           </Typography>


                       </Stack>
                   </Stack>
                )
            }
        </Box>
    );
}

export default ActivityStack;
