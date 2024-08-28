import { Fragment } from "react";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import FlagIcon from "@mui/icons-material/Flag";
import WcIcon from "@mui/icons-material/Wc";
import DoneIcon from "@mui/icons-material/Done";

import { charterInfo } from "data.json";

const icon = (type: string) => {
  switch (type) {
    case "flag":
      return <FlagIcon />;
    case "locationOn":
      return <LocationOnIcon />;
    case "wc":
      return <WcIcon />;
    case "done":
      return <DoneIcon />;
  }
};

const Schedule = () => {
  const { schedule } = charterInfo;

  return (
    <Timeline position="alternate" sx={{ maxWidth: 300 }}>
      {schedule.map((item, index) => (
        <Fragment key={index}>
          <TimelineItem sx={{ height: 120 }}>
            <TimelineOppositeContent
              sx={{ m: "auto 0" }}
              align={item.position === "right" ? "right" : "left"}
              color="text.secondary"
            >
              {item.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot
                color={item.position === "left" ? "grey" : "primary"}
              >
                {icon(item.type)}
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent
              display="flex"
              flexDirection="column"
              justifyContent="center"
              sx={{ py: "12px", px: 2 }}
            >
              <div>
                <Typography fontWeight={600} component="span">
                  {item.toDo}
                </Typography>
                <Typography
                  textAlign={item.position === "left" ? "left" : "right"}
                >
                  {item.location}
                </Typography>
              </div>
            </TimelineContent>
          </TimelineItem>
        </Fragment>
      ))}
    </Timeline>
  );
};

export default Schedule;
