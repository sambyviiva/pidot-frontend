"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, SxProps, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FormInputs, FormInputsSchema } from "../../../lib/types";
import { APP_BACKGROUND } from "../_common/styles";
import { addEvent } from "./actions/addEvent";
import { FirstPage } from "./components/FirstPage";
import { FormButtons } from "./components/FormButtons";
import { SecondPage } from "./components/SecondPage";
import { Multiform } from "./components/Multiform";

const FIELD_CONTAINER_WIDTH = "400px";

const containerStyles: SxProps = {
  ...APP_BACKGROUND,
  // bgcolor: "red",
  display: "flex",
  justifyContent: "center",
  paddingBottom: "20px",
};

const fieldsContainerStyles: SxProps = {
  width: FIELD_CONTAINER_WIDTH,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

const titleStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  pt: "35px",
  pb: "35px",
  fontSize: "24px",
  fontWeight: 700,
};

const buttonsDivStyles: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  // pt: "40px",
};

export const fullFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "center",
  width: "100%",
  pt: "24px",
};

export const doupleFieldContainerStyles: SxProps = {
  display: "flex",
  justifyContent: "space-between",
  py: "24px",
  margin: "auto",
};

export const labelFieldContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "48%",
};

export const fieldFullStyles: SxProps = {
  width: "100%",
};

export const errorContainerStyles: SxProps = {
  height: "20px",
  paddingTop: "10px",
};

export interface ICreateNewFieldValues {
  name: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  location: string;
  description: string;
  invitationCount?: number;
  avecsWelcome: boolean;
  avecCount?: number;
  attendees: string;
}

const CreateNew: React.FC = () => {
  const [firstPageActive, setFirstPageActive] = useState<boolean>(true);
  const [imageFile, setImageFile] = useState<File | null>(null);

  // const clientAction = async (formData: FormData) => {
  // client side validation
  // const validatedDataResult = EventSchema.safeParse({
  //   name: formData.get("name"),
  //   startDate: formData.get("start"),
  //   endDate: formData.get("end"),
  // });

  // if (!validatedDataResult.success) {
  //   let errorMessage = "";
  //   validatedDataResult.error.issues.forEach((issue) => {
  //     errorMessage =
  //       errorMessage + issue.path[0] + ": " + issue.message + ". ";
  //   });
  //   console.error(errorMessage);
  //   return;
  // }

  // const response = await addEvent(validatedDataResult.data);

  // if (response?.error) {
  //   console.error("Server error: " + response.error);
  // } else {
  // formRef.current?.reset();
  // router.push("/events");
  //   }
  // };

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
    <Box sx={containerStyles}>
      <Box sx={fieldsContainerStyles}>
        <Box sx={titleStyles}>
          <Typography variant="h4" color="secondary">
            Create Event
          </Typography>
        </Box>
        <Multiform />
        {/* <form>
          {firstPageActive ? (
            <FirstPage
              register={register}
              imageFile={imageFile}
              setImageFile={setImageFile}
              control={control}
            />
          ) : (
            <SecondPage register={register} />
          )}
          <Box sx={buttonsDivStyles}>
            <FormButtons
              firstPageActive={firstPageActive}
              setFirstPageActive={setFirstPageActive}
              trigger={trigger}
              handleSubmit={handleSubmit}
              reset={reset}
              imageFile={imageFile}
            />
          </Box>
        </form> */}
        <Box sx={errorContainerStyles}>
          <Typography color="error">{errors.name?.message}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default CreateNew;
