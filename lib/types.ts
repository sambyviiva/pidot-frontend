import { z } from "zod";

export const EventSchema = z.object({
  name: z.string().trim().min(1).max(100),
  startDate: z.string(),
  endDate: z.string(),
});

export type Event = z.infer<typeof EventSchema>;

export const FormInputsSchema = z.object({
  name: z.string().min(1, "Event name is required"),
  start: z.date(),
  end: z.date().optional(),
  location: z.string().min(1, "Location is required"),
  additionaInfo: z.string().optional(),
  invitationCount: z.number(),
  avecCount: z.number(),
  attendeesList: z.array(z.string()),
});

export type FormInputs = z.infer<typeof FormInputsSchema>;
