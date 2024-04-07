import {
  Box,
  Button,
  InputAdornment,
  InputLabel,
  Switch,
  SxProps,
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
import {
  fullFieldContainerStyles,
  fieldFullStyles,
  doupleFieldContainerStyles,
  labelFieldContainerStyles,
} from "../page";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";
import dayjs, { Dayjs } from "dayjs";
import {
  AddLocationAlt,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import ImageDropzone from "./ImageDropzone";
import { addEvent } from "../actions/addEvent";
import { useRouter } from "next/navigation";

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

const STEPS = [
  { name: "Basic information" },
  { name: "Event details" },
  { name: "Add Image" },
];

export const Multiform = () => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [start, setStart] = useState<Dayjs | null>(dayjs());
  const [end, setEnd] = useState<Dayjs | null>(dayjs());
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [avecsWelcome, setAvecsWelcome] = useState<boolean>(false);
  const [createdId, setCreatedId] = useState<string>();

  const processForm: SubmitHandler<FormInputs> = async (data) => {
    console.log(JSON.stringify(data));
    const response = await addEvent(data);

    setCreatedId("123123123");

    if (response?.error) {
      console.error("Server error: " + response.error);
    }
    reset();
  };

  const next = async () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep((step) => step + 1);
    } else {
      // submit form
      await handleSubmit(processForm)();
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

  if (createdId) {
    return (
      <Box>
        <Typography>Event Created Succesfully!</Typography>
        <Typography>{`Link to event: http://localhost:3000/events/${createdId}`}</Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Stepper activeStep={currentStep} alternativeLabel>
        {STEPS.map((step) => (
          <Step key={step.name}>
            <StepLabel>{step.name}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <form>
        {/* ------ BASIC INFORMATION ------*/}
        {currentStep === 0 && (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Box>
              <Box
                sx={{
                  ...fullFieldContainerStyles,
                  ...{ marginBottom: "60px" },
                }}
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

        {/* ------ EVENT DETAILS ------*/}
        {currentStep === 1 && (
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
                style={{ width: "70px" }}
                {...register("invitationCount", {
                  valueAsNumber: true,
                })}
              />
            </Box>
            <Box sx={invAvecsWelcomeStyles}>
              <Typography color="secondary" sx={{ mr: "60px" }}>
                Avecs Welcome
              </Typography>
              <Switch
                id="avecsWelcome"
                name="avecsWelcome"
                value={avecsWelcome}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setAvecsWelcome(event.target.checked);
                }}
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
                style={{ width: "70px" }}
                {...register("avecCount", {
                  valueAsNumber: true,
                })}
              />
            </Box>
            <Box sx={fullFieldContainerStyles}>
              <TextField
                multiline
                rows={4}
                sx={fieldFullStyles}
                label="Description"
                variant="outlined"
                {...register("description")}
              />
            </Box>
          </Box>
        )}

        {/* ------ IMAGE ------*/}
        {currentStep === 2 && (
          <Box>
            <Typography
              sx={{ marginBottom: "5px" }}
              variant="h6"
              color={theme.palette.secondary.main}
            >
              Add Event Image:
            </Typography>
            <Box sx={{ marginBottom: "50px" }}>
              <ImageDropzone
                imageFile={imageFile}
                setImageFile={setImageFile}
              />
            </Box>
          </Box>
        )}
        <Box sx={{ height: "40px" }} />

        {/* ------ BUTTONS ------*/}
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Button
            variant="outlined"
            startIcon={<ArrowBackIos />}
            onClick={prev}
          >
            Back
          </Button>
          <Button
            variant="contained"
            onClick={next}
            endIcon={<ArrowForwardIos />}
          >
            {currentStep === 2 ? "Create" : "Next"}
          </Button>
        </Box>
      </form>
    </Box>
  );
};
