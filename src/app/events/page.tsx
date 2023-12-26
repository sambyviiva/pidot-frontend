import { Box, SxProps, Typography } from "@mui/material";
import React from "react";
import { EventList } from "./EventList";

const pageContainer: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const eventsContainer: SxProps = {
  width: "400px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const MyEvents: React.FC = async () => {
  const response = await fetch(`https://pidot-event-api.onrender.com/event`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json;charset=UTF-8",
    },
  });

  const data = await response.json();
  return (
    <Box sx={pageContainer}>
      <Box sx={eventsContainer}>
        <Typography
          variant="h3"
          color="secondary"
          style={{ padding: "20px 0" }}
        >
          My Events
        </Typography>
        <EventList events={data} />
      </Box>
    </Box>
  );
};

export default MyEvents;
