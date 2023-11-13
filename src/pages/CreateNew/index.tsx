import {
  Box,
  Button,
  SxProps,
  TextField,
  Typography,
  Checkbox,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { APP_BACKGROUND } from "../../common/styles";
import { MobileDateTimePicker } from "@mui/x-date-pickers";
import { AddLocationAlt } from "@mui/icons-material";
interface ICreateNewProps {
  penkki: number;
}

const FIELD_CONTAINER_WIDTH = "400px";

const containerStyles: SxProps = {
  ...APP_BACKGROUND,
  // bgcolor: "red",
};

const titleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
  fontSize: "24px",
  fontWeight: 700,
};

const fullFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
};

const doupleFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  py: "24px",
  width: FIELD_CONTAINER_WIDTH,
  margin: "auto",
};

const labelFieldContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "48%",
};

const buttonContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
};

const fieldFullStyles: SxProps = {
  width: FIELD_CONTAINER_WIDTH,
};

const CreateNew: React.FC<ICreateNewProps> = () => {
  const [firstPageActive, setFirstPageActive] = useState<boolean>(true);
  return (
    <Box sx={containerStyles}>
      <Box sx={titleStyles}>Create New</Box>
      {firstPageActive ? (
        <FirstPage goToNextPage={() => setFirstPageActive(false)} />
      ) : (
        <SecondPage goBack={() => setFirstPageActive(true)} />
      )}
    </Box>
  );
};

interface IFirstPageProps {
  goToNextPage: () => void;
}
const FirstPage = (props: IFirstPageProps) => {
  return (
    <>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          sx={fieldFullStyles}
          id="name"
          label="Name"
          variant="standard"
        />
      </Box>
      <Box sx={doupleFieldContainerStyles}>
        <Box sx={labelFieldContainerStyles}>
          <Typography color="secondary" sx={{ ml: "2px" }}>
            Start Time
          </Typography>
          <MobileDateTimePicker
            ampm={false}
            slotProps={{
              textField: {
                variant: "filled",
              },
            }}
          />
        </Box>

        <Box sx={labelFieldContainerStyles}>
          <Typography color="secondary" sx={{ ml: "2px" }}>
            End Time
          </Typography>
          <MobileDateTimePicker
            ampm={false}
            slotProps={{
              textField: {
                variant: "filled",
              },
            }}
          />
        </Box>
      </Box>
      <Box sx={fullFieldContainerStyles}>
        <TextField
          sx={fieldFullStyles}
          id="location"
          label="Location"
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
          maxRows={8}
          sx={fieldFullStyles}
          id="location"
          label="Additional Information"
          variant="outlined"
        />
      </Box>
      <Box sx={buttonContainerStyles}>
        <Button variant="contained" onClick={() => props.goToNextPage()}>
          Next
        </Button>
      </Box>
    </>
  );
};

const invTitleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
};

const invCountContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const invAvecsContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const invAvecCountContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ml: "20px",
};

interface ISecondPageProps {
  goBack: () => void;
}

const SecondPage = (props: ISecondPageProps) => (
  <>
    <Box>
      <Box sx={invTitleStyles}>Invitations</Box>
      <Box sx={invCountContainerStyles}>
        <Typography>How many invitations?</Typography>
        <TextField type="number" id="invitations" variant="outlined" />
      </Box>
      <Box sx={invAvecsContainerStyles}>
        <Typography>Avecs welcome?</Typography>
        <Checkbox />
      </Box>
      <Box sx={invAvecCountContainerStyles}>
        <Typography>Number of Avecs</Typography>
        <TextField type="number" id="invitations" variant="outlined" />
      </Box>
      <Box sx={buttonContainerStyles}>
        <Button variant="contained" onClick={() => props.goBack()}>
          Back
        </Button>
      </Box>
    </Box>
  </>
);

export default CreateNew;
