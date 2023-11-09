import { Box, SxProps, TextField } from "@mui/material";
import { APP_BACKGROUND } from "../../common/styles";

interface ICreateNewProps {
  penkki: number;
}

const containerStyles: SxProps = {
  ...APP_BACKGROUND,
};

const titleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
  fontSize: "24px",
  fontWeight: 700,
};

const fieldRowStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  py: "24px",
};

const CreateNew: React.FC<ICreateNewProps> = (props: ICreateNewProps) => {
  return (
    <Box sx={containerStyles}>
      <Box sx={titleStyles}>Create New</Box>
      <Box sx={fieldRowStyles}>
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
        />
      </Box>
      <Box>Penkki: {props.penkki}</Box>
    </Box>
  );
};

export default CreateNew;
