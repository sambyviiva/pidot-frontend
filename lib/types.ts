import { z } from "zod";

export const FormInputsSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  start: z.string().optional(),
  end: z.string().optional().optional(),
  location: z.string().optional(),
  description: z.string().optional(),
  invitationCount: z.union([z.number(), z.nan()]).optional(),
  avecCount: z.union([z.number(), z.nan()]).optional(),
});

export type FormInputs = z.infer<typeof FormInputsSchema>;
