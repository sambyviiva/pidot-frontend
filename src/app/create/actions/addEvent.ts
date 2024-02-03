"use server";

import axios, { isAxiosError } from "axios";
import { EventSchema } from "../../../../lib/types";

export const addEvent = async (newEvent: unknown) => {
  // server side validation
  const inputValidationResult = EventSchema.safeParse(newEvent);
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
      "https://pidot-event-api.onrender.com/event",
      inputValidationResult.data
    );
    console.log(`Event added with response: ${JSON.stringify(response.data)}`);
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
