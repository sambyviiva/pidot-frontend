import { Box, Button, SxProps, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useState } from "react";
import axios from "axios";
import { APP_BACKGROUND } from "../_common/styles";
import { FirstPage } from "./components/FirstPage";
import { SecondPage } from "./components/SecondPage";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { FormFields } from "./FormFields";
import { createEvent } from "./actions/createAction";

const FIELD_CONTAINER_WIDTH = "400px";

const containerStyles: SxProps = {
  ...APP_BACKGROUND,
  // bgcolor: "red",
  display: "flex",
  justifyContent: "center",
};

const fieldsContainerStyles: SxProps = {
  width: FIELD_CONTAINER_WIDTH,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
  fontSize: "24px",
  fontWeight: 700,
};

export const fullFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  py: "24px",
};

export const doupleFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  py: "24px",
  margin: "auto",
};

export const labelFieldContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "48%",
};

export const fieldFullStyles: SxProps = {
  width: "100%",
};

export interface ICreateNewFieldValues {
  name: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  location: string;
  additionalInformation: string;
  invitationCount?: number;
  avecsWelcome: boolean;
  avecCount?: number;
  attendees: string;
}

const buttonContainerStyles: SxProps = {
  py: "24px",
};

const twoButtonsContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  width: "300px",
  py: "24px",
};

const INITIAL_VALUES: ICreateNewFieldValues = {
  name: "",
  startDate: null,
  endDate: null,
  location: "",
  additionalInformation: "",
  invitationCount: undefined,
  avecsWelcome: false,
  avecCount: undefined,
  attendees: "",
};

const CreateNew: React.FC = () => {
  return (
    <Box sx={containerStyles}>
      <Box sx={fieldsContainerStyles}>
        <Box sx={titleStyles}>
          <Typography variant="h3" color="secondary">
            Create New
          </Typography>
        </Box>

        <form action={createEvent}>
          <FormFields />
        </form>
      </Box>
    </Box>
  );
};

export default CreateNew;
