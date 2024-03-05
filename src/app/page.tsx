"use client";

import { Button, Typography } from "@mui/material";
import { useFormState } from "react-dom";

import { uploadFile, IFormState, getImageFromS3Action } from "./actions";
import { SubmitButton } from "./submitButton";
import { s3Client } from "./_aws/s3Client";
import { GetObjectCommand, GetObjectCommandInput } from "@aws-sdk/client-s3";

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
      <section>
        <form action={getImageFromS3Action}>
          <Button type="submit">Lataa kuva</Button>
        </form>
      </section>
      <section>
        <img src="" alt="" />
      </section>
    </main>
  );
}
