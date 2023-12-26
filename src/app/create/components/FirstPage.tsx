"use client";

import { AddLocationAlt } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dispatch, SetStateAction, useState } from "react";
import {
  ICreateNewFieldValues,
  doupleFieldContainerStyles,
  fieldFullStyles,
  fullFieldContainerStyles,
  labelFieldContainerStyles,
} from "../page";
import { Dayjs } from "dayjs";

export const FirstPage = () => {
  const [start, setStart] = useState<Dayjs | null>(null);
  const [end, setEnd] = useState<Dayjs | null>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          sx={fieldFullStyles}
          id="name"
          label="name"
          name="name"
          variant="standard"
        />
      </Box>
      <Box sx={doupleFieldContainerStyles}>
        <Box sx={labelFieldContainerStyles}>
          <Typography color="secondary" sx={{ ml: "2px" }}>
            Start Time
          </Typography>
          <input type="hidden" name="start" value={start?.toISOString()} />
          <MobileDateTimePicker
            ampm={false}
            slotProps={{
              textField: {
                variant: "filled",
              },
            }}
            value={start}
            onChange={(e) => setStart(e)}
          />
        </Box>

        <Box sx={labelFieldContainerStyles}>
          <Typography color="secondary" sx={{ ml: "2px" }}>
            End Time
          </Typography>
          <input type="hidden" name="end" value={end?.toISOString()} />
          <MobileDateTimePicker
            ampm={false}
            slotProps={{
              textField: {
                variant: "filled",
              },
            }}
            value={end}
            onChange={(e) => setEnd(e)}
          />
        </Box>
      </Box>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          sx={fieldFullStyles}
          id="location"
          label="Location"
          name="location"
          variant="standard"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AddLocationAlt color="secondary" />
              </InputAdornment>
            ),
          }}
        />
      </Box>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          multiline
          rows={4}
          sx={fieldFullStyles}
          id="additionaInfo"
          name="additionaInfo"
          label="Additional Information"
          variant="outlined"
        />
      </Box>
    </LocalizationProvider>
  );
};
