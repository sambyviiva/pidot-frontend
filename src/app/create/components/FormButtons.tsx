import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, SxProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";
import { UseFormTrigger } from "react-hook-form";
import { FormInputs } from "../../../../lib/types";

interface IProps {
  firstPageActive: boolean;
  setFirstPageActive: Dispatch<SetStateAction<boolean>>;
  trigger: UseFormTrigger<FormInputs>;
}

const twoButtonsContainerStyles: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

export const FormButtons = (props: IProps) => {
  const { firstPageActive, setFirstPageActive, trigger } = props;
  const { pending } = useFormStatus();

  const onClickNext = async () => {
    setFirstPageActive(false);
    await trigger(["name"], { shouldFocus: true });
  };
  return (
    <>
      {firstPageActive ? (
        <Button
          variant="contained"
          onClick={onClickNext}
          endIcon={<ArrowForwardIos />}
        >
          Next
        </Button>
      ) : (
        <Box sx={twoButtonsContainerStyles}>
          {pending ? (
            <Box sx={{ color: "white" }}>Adding Event...</Box>
          ) : (
            <>
              <Button
                variant="outlined"
                startIcon={<ArrowBackIos />}
                onClick={() => setFirstPageActive(true)}
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
            </>
          )}
        </Box>
      )}
    </>
  );
};
