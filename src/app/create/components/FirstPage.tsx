import { AddLocationAlt } from "@mui/icons-material";
import { Box, InputAdornment, TextField, Typography } from "@mui/material";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import {
  doupleFieldContainerStyles,
  fieldFullStyles,
  fullFieldContainerStyles,
  labelFieldContainerStyles,
} from "../page";
import { UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";

interface IFirstPageProps {
  register: UseFormRegister<FormInputs>;
}

export const FirstPage = (props: IFirstPageProps) => {
  const { register } = props;
  const [start, setStart] = useState<Dayjs | null>(dayjs());
  const [end, setEnd] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          sx={fieldFullStyles}
          label="name"
          variant="standard"
          {...register("name")}
        />
      </Box>
      <Box sx={doupleFieldContainerStyles}>
        <Box sx={labelFieldContainerStyles}>
          <Typography color="secondary" sx={{ ml: "2px" }}>
            Start Time
          </Typography>
          <input
            type="hidden"
            value={start?.toISOString()}
            {...register("start")}
          />
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
          <input
            type="hidden"
            value={end?.toISOString()}
            {...register("end")}
          />
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
          label="Location"
          variant="standard"
          {...register("location")}
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
          label="Additional Information"
          variant="outlined"
          {...register("additionaInfo")}
        />
      </Box>
    </LocalizationProvider>
  );
};
