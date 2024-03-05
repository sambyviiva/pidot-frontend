import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button, SxProps } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useFormStatus } from "react-dom";
import {
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormReset,
  UseFormTrigger,
} from "react-hook-form";
import { FormInputs } from "../../../../lib/types";
import { addEvent } from "../actions/addEvent";
import { useRouter } from "next/navigation";

interface IProps {
  firstPageActive: boolean;
  setFirstPageActive: Dispatch<SetStateAction<boolean>>;
  trigger: UseFormTrigger<FormInputs>;
  handleSubmit: UseFormHandleSubmit<FormInputs>;
  reset: UseFormReset<FormInputs>;
  imageFile: File | null;
}

const twoButtonsContainerStyles: SxProps = {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
};

export const FormButtons = (props: IProps) => {
  const {
    firstPageActive,
    setFirstPageActive,
    trigger,
    handleSubmit,
    reset,
    imageFile,
  } = props;
  const { pending } = useFormStatus();
  const router = useRouter();

  const onClickNext = async () => {
    const isValid = await trigger(["name"], { shouldFocus: true });
    if (isValid) {
      setFirstPageActive(false);
    }
  };

  const processForm: SubmitHandler<FormInputs> = async (data) => {
    console.log(JSON.stringify(data));
    const response = await addEvent(data);

    if (response?.error) {
      console.error("Server error: " + response.error);
    }
    reset();
    router.push("/events");
  };

  const onClickSubmit = async () => {
    await handleSubmit(processForm)();
  };

  return (
    <>
      {firstPageActive ? (
        <Button
          variant="contained"
          onClick={onClickNext}
          endIcon={<ArrowForwardIos />}
        >
          {imageFile ? "Next" : "Use default image"}
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
                onClick={onClickSubmit}
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
