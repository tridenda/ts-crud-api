import { z } from "zod";

export const signUpSchema = z.object({
  body: z.object({
    fullname: z
      .string()
      .min(5, { message: "Fullname must be greater than 5 characters" }),
    email: z
      .string()
      .min(5, { message: "Email must be greater than 5 characters" }),
    password: z
      .string()
      .min(8, { message: "Password must be greater than 8 characters" }),
  }),
});

export const signInSchema = z.object({
  body: z.object({
    email: z.string(),
    password: z.string(),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      fullname: z
        .string()
        .min(1, { message: "Firstname must be greater than 1 character" }),
      email: z
        .string()
        .min(1, { message: "Lastname must be greater than 1 character" }),
      passwrod: z
        .string()
        .min(8, { message: "Password must be greater than 8 characters" }),
    })
    .partial(),
});
