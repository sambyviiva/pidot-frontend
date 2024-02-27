"use client";

import { Typography } from "@mui/material";
import { useFormState } from "react-dom";

import { uploadFile, IFormState } from "./actions";
import { SubmitButton } from "./submitButton";

export default function Home() {
  const [state, formAction] = useFormState<IFormState, FormData>(uploadFile, {
    status: null,
    message: null,
  });
  return (
    <main>
      <Typography color="secondary">Main Page</Typography>
      <form action={formAction}>
        <input type="file" id="file" name="file" accept="images/*" />
        <SubmitButton />
      </form>
      {state.status === "success" && (
        <Typography color="success">{state.message}</Typography>
      )}
      {state.status === "error" && (
        <Typography color="error">{state.message}</Typography>
      )}
    </main>
  );
}
