"use server";

import axios from "axios";

export const createEvent = async (formData: FormData) => {
  axios.post("https://pidot-event-api.onrender.com/event", {
    // testi: formData.get("testi"),
    // name: formData.get("testi"),
    // startDate: "2020-01-01T00:00:00Z",
    // endDate: "2020-01-01T00:00:00Z",
    name: formData.get("name"),
    startDate: formData.get("start"),
    endDate: formData.get("end"),
  });
};
