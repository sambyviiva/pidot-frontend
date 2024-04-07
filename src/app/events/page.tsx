import { Box, SxProps, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { EventList } from "./EventList";
import { getEvents } from "./actions/getEvents";

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
  const response = await getEvents();
  return (
    <Box sx={pageContainer}>
      <Box sx={eventsContainer}>
        <Typography
          variant="h3"
          color="secondary"
          style={{ padding: "20px 0" }}
        ></Typography>
        <EventList events={response} />
      </Box>
    </Box>
  );
};

export default MyEvents;
