"use client";

import { Box, Switch, SxProps, TextField, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Dispatch, SetStateAction, useState } from "react";
import { ICreateNewFieldValues, fieldFullStyles } from "../page";

const invTitleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  my: "20px",
};

const invCountStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  mb: "8px",
};

const invAvecsWelcomeStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  mb: "8px",
};

const invAvecCountStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  ml: "20px",
  mb: "70px",
};

export const SecondPage = () => {
  return (
    <Box sx={{ width: "320px" }}>
      <Box sx={invTitleStyles}>
        <Typography color="secondary" variant="h5">
          Invitations
        </Typography>
      </Box>
      <Box sx={invCountStyles}>
        <Typography color="secondary" sx={{ mr: "32px" }}>
          How many invitations
        </Typography>
        <input
          type="number"
          id="invitationCount"
          name="invitationCount"
          style={{ width: "70px" }}
        />
      </Box>
      <Box sx={invAvecsWelcomeStyles}>
        <Typography color="secondary" sx={{ mr: "60px" }}>
          Avecs Welcome
        </Typography>
        <Switch
          id="avecsWelcome"
          name="avecsWelcome"
          // TOIMIIKOHAN SWITCH?!?!?!
          // value={fieldValues.avecsWelcome}
          // onChange={(event) => {
          // if(event.target.value === "true") {
          //   // set number of avecs to 0
          // }
          //   setFieldValues({
          //     ...fieldValues,
          //     avecsWelcome: event.target.value === "true" ? false : true,
          //   });
          // }}
        />
      </Box>
      <Box sx={invAvecCountStyles}>
        <Typography
          color={"secondary"}
          // color={fieldValues.avecsWelcome ? grey[700] : "secondary"}
          sx={{
            mr: "40px",
          }}
        >
          Number of Avecs
        </Typography>
        <input
          type="number"
          id="avecCount"
          name="avecCount"
          style={{ width: "70px" }}
        />
      </Box>
      <Box>
        <TextField
          multiline
          rows={8}
          sx={fieldFullStyles}
          id="attendeesList"
          name="attendeesList"
          label="List of Attendees"
          variant="outlined"
        />
      </Box>
    </Box>
  );
};
