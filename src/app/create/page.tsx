"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, SxProps, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { EventSchema, FormInputs, FormInputsSchema } from "../../../lib/types";
import { APP_BACKGROUND } from "../_common/styles";
import { addEvent } from "./actions/addEvent";
import { FirstPage } from "./components/FirstPage";
import { FormButtons } from "./components/FormButtons";
import { SecondPage } from "./components/SecondPage";

const FIELD_CONTAINER_WIDTH = "400px";

const containerStyles: SxProps = {
  ...APP_BACKGROUND,
  // bgcolor: "red",
  display: "flex",
  justifyContent: "center",
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
  py: "24px",
  fontSize: "24px",
  fontWeight: 700,
};

const buttonsDivStyles: SxProps = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  pt: "40px",
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

export interface ICreateNewFieldValues {
  name: string;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  location: string;
  additionalInformation: string;
  invitationCount?: number;
  avecsWelcome: boolean;
  avecCount?: number;
  attendees: string;
}

const CreateNew: React.FC = () => {
  const [firstPageActive, setFirstPageActive] = useState<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();

  const clientAction = async (formData: FormData) => {
    // client side validation
    const validatedDataResult = EventSchema.safeParse({
      name: formData.get("name"),
      startDate: formData.get("start"),
      endDate: formData.get("end"),
    });

    if (!validatedDataResult.success) {
      let errorMessage = "";
      validatedDataResult.error.issues.forEach((issue) => {
        errorMessage =
          errorMessage + issue.path[0] + ": " + issue.message + ". ";
      });
      console.error(errorMessage);
      return;
    }

    const response = await addEvent(validatedDataResult.data);

    if (response?.error) {
      console.error("Server error: " + response.error);
    } else {
      formRef.current?.reset();
      router.push("/events");
    }
  };

  const processForm: SubmitHandler<FormInputs> = async (data) => {
    const response = await addEvent(data);

    if (response?.error) {
      console.error("Server error: " + response.error);
    }
    reset();
    router.push("/events");
  };

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(FormInputsSchema),
  });

  return (
    <Box sx={containerStyles}>
      <Box sx={fieldsContainerStyles}>
        <Box sx={titleStyles}>
          <Typography variant="h3" color="secondary">
            Create New
          </Typography>
        </Box>

        <form
          ref={formRef}
          action={clientAction}
          onSubmit={handleSubmit(processForm)}
        >
          {firstPageActive ? (
            <FirstPage register={register} />
          ) : (
            <SecondPage register={register} />
          )}
          <Box>{errors.name?.message}</Box>
          <Box sx={buttonsDivStyles}>
            <FormButtons
              firstPageActive={firstPageActive}
              setFirstPageActive={setFirstPageActive}
              trigger={trigger}
            />
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default CreateNew;
