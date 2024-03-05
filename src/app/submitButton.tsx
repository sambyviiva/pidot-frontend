"use client";

import { Button } from "@mui/material";
import { useFormStatus } from "react-dom";

export const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending}>
      upload image
    </Button>
  );
};
