import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { theme } from "@/app/_theme/theme";
import {
  LocalizationProvider,
  MobileDateTimePicker,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { register } from "module";
import Dropzone from "react-dropzone";
import {
  fullFieldContainerStyles,
  fieldFullStyles,
  doupleFieldContainerStyles,
  labelFieldContainerStyles,
} from "../page";
import CategorySelect from "./CategorySelect";
import { useForm } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";
import dayjs, { Dayjs } from "dayjs";
import {
  AddLocationAlt,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import { FormButtons } from "./FormButtons";

const STEPS = [
  { name: "Basic information" },
  { name: "Event details" },
  { name: "Add Image" },
];

export const Multiform = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [start, setStart] = useState<Dayjs | null>(dayjs());
  const [end, setEnd] = useState<Dayjs | null>(dayjs());

  const next = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
    control,
  } = useForm<FormInputs>({
    // resolver: zodResolver(FormInputsSchema),
  });

  return (
    <Box>
      <Stepper activeStep={currentStep} alternativeLabel>
        {STEPS.map((step) => (
          <Step key={step.name}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {currentStep === 0 && (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box>
            <Box
              sx={{ ...fullFieldContainerStyles, ...{ marginBottom: "60px" } }}
            >
              <TextField
                sx={fieldFullStyles}
                label="Event name"
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
          </Box>
        </LocalizationProvider>
      )}
      {currentStep === 1 && <Box>Step 2</Box>}
      {currentStep === 2 && (
        <Box>
          {/* <Box sx={fileChooserContainerStyles}> */}
          <input type="file" id="file" name="file" accept="images/*" hidden />
          <InputLabel
            sx={{
              // ...fileChooserStyles,
              ...{ backgroundColor: theme.palette.primary.main },
            }}
            htmlFor="file"
          >
            Upload File
          </InputLabel>

          <Typography
            sx={{ marginBottom: "5px" }}
            variant="h6"
            color={theme.palette.secondary.main}
          >
            Event Image:
          </Typography>
          {/* <Box sx={{ marginBottom: "50px" }}>
            <Dropzone imageFile={imageFile} setImageFile={setImageFile} />
          </Box> */}
        </Box>
      )}

      {/* <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "40px",
            }}
          >
            <CategorySelect control={control} />
          </Box> */}

      <Button variant="outlined" startIcon={<ArrowBackIos />} onClick={prev}>
        Back
      </Button>
      <Button variant="contained" onClick={next} endIcon={<ArrowForwardIos />}>
        {currentStep === 2 ? "Create" : "Next"}
      </Button>
    </Box>
  );
};
