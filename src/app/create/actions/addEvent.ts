"use server";

import axios, { isAxiosError } from "axios";
import { FormInputsSchema } from "../../../../lib/types";

export const addEvent = async (newEvent: unknown) => {
  // server side validation
  console.log(JSON.stringify(newEvent));
  const inputValidationResult = FormInputsSchema.safeParse(newEvent);
  if (!inputValidationResult.success) {
    let errorMessage = "";
    inputValidationResult.error.issues.forEach((issue) => {
      errorMessage = errorMessage + issue.path[0] + ": " + issue.message + ". ";
    });
    return {
      error: errorMessage,
    };
  }

  try {
    const response = await axios.post(
      `${process.env.EXTERNAL_SERVER_URL}/event`,
      // "https://pidot-event-api.onrender.com/event",
      inputValidationResult.data
    );
    return response.data;
  } catch (e: unknown) {
    if (isAxiosError(e)) {
      return {
        error: e.message,
      };
    } else if (e instanceof Error)
      return {
        error: `Unknown error ${e.message}`,
      };
  }
};
