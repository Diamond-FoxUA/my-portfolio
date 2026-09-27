import z from "zod";

export const contactSchema = z.object({
  honeypot: z.string().optional(),
  name: z.string().min(2, "Name should be at least 2 characters long."),
  email: z.email(),
  message: z.string().min(10, "Message should be at least 10 characters long."),
});

export type ContactInput = z.infer<typeof contactSchema>;
