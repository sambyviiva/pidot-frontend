"use server";

import axios, { isAxiosError } from "axios";

export const postAnswer = async (
  name: string,
  eventId: string,
  answer: string
) => {
  try {
    const response = await axios.post(
      "http://localhost:8000/answer",
      //   "https://pidot-event-api.onrender.com/answer",
      {
        name,
        eventId,
        answer,
      }
    );
    console.log(
      `Answer submitted with response: ${JSON.stringify(response.data)}`
    );
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
