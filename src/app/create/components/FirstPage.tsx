import { AddLocationAlt } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
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
import { Control, UseFormRegister } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";
import Dropzone from "./ImageDropzone";
import CategorySelect from "./CategorySelect";

interface IFirstPageProps {
  register: UseFormRegister<FormInputs>;
  imageFile: File | null;
  setImageFile: (file: File) => void;
  control: Control<FormInputs>;
}

export const FirstPage = (props: IFirstPageProps) => {
  const { register, imageFile, setImageFile, control } = props;
  const theme = useTheme();
  const [start, setStart] = useState<Dayjs | null>(dayjs());
  const [end, setEnd] = useState<Dayjs | null>(dayjs());
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box sx={{ ...fullFieldContainerStyles, ...{ marginBottom: "60px" } }}>
        <TextField
          sx={fieldFullStyles}
          label="Event name"
          variant="standard"
          {...register("name")}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
        <CategorySelect control={control} />
      </Box>
      {/* <Box sx={fileChooserContainerStyles}>
        <input type="file" id="file" name="file" accept="images/*" hidden />
        <InputLabel
          sx={{
            ...fileChooserStyles,
            ...{ backgroundColor: theme.palette.primary.main },
          }}
          htmlFor="file"
        >
          Upload File
        </InputLabel>
      </Box> */}
      <Typography
        sx={{ marginBottom: "5px" }}
        variant="h6"
        color={theme.palette.secondary.main}
      >
        Event Image:
      </Typography>
      <Box sx={{ marginBottom: "50px" }}>
        <Dropzone imageFile={imageFile} setImageFile={setImageFile} />
      </Box>
      {/* <Box sx={doupleFieldContainerStyles}>
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
      </Box> */}
    </LocalizationProvider>
  );
};
