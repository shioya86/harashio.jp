import React from "react";
import {
    Timeline,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineSeparator,
    timelineItemClasses
} from "@mui/lab";
import {Typography} from "@mui/material";

function HistoryTimeline(params) {
    const {data} = params;

    return (
        <Timeline
            sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                    flex: 0,
                    padding: 0,
                },
            }}
        >
            {
                data.map((elem) =>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                sx={{
                                    backgroundColor: "#000000",
                                    color: "#FFFFFF",
                                    padding: "0 5px 0 5px",
                                    fontSize: ".8em",
                                    display: "inline-block",
                                    marginRight: ".5em",
                                }}
                            >
                                {elem.date}
                            </Typography>
                            {elem.title}
                        </TimelineContent>
                    </TimelineItem>
                )
            }

            <TimelineItem>
                <TimelineSeparator>
                    <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>現在</TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}

export default HistoryTimeline;