import React from "react";
import {
    Timeline,
    TimelineConnector, TimelineContent, timelineContentClasses,
    TimelineDot,
    TimelineItem, timelineItemClasses,
    TimelineSeparator
} from "@mui/lab";

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
                            <span style={{color: "#FFFFFF", backgroundColor: "#000000", padding: 3, margin: 3}}>
                                {elem.date}
                            </span>
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