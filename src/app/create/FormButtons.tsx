import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, SxProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface IProps {
  firstPageActive: boolean;
  setFirstPageActive: Dispatch<SetStateAction<boolean>>;
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

export const FormButtons = (props: IProps) => {
  return (
    <>
      {props.firstPageActive ? (
        <Box sx={buttonContainerStyles}>
          <Button
            variant="contained"
            onClick={() => props.setFirstPageActive(false)}
            endIcon={<ArrowForwardIos />}
          >
            Next
          </Button>
        </Box>
      ) : (
        <Box sx={twoButtonsContainerStyles}>
          <Button
            variant="outlined"
            startIcon={<ArrowBackIos />}
            onClick={() => props.setFirstPageActive(true)}
          >
            Back
          </Button>
          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIos />}
          >
            Create
          </Button>
        </Box>
      )}
    </>
  );
};
