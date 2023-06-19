import { z } from "zod";

export const createUserSchema = z.object({
  body: z.object({
    firstname: z
      .string()
      .min(1, { message: "Firstname must be greater than 1 character" }),
    lastname: z
      .string()
      .min(1, { message: "Lastname must be greater than 1 character" }),
    birthday: z.string().transform((str) => new Date(str)),
  }),
});

export const updateUserSchema = z.object({
  params: z.object({ id: z.string() }),
  body: z
    .object({
      firstname: z
        .string()
        .min(1, { message: "Firstname must be greater than 1 character" }),
      lastname: z
        .string()
        .min(1, { message: "Lastname must be greater than 1 character" }),
      birthday: z.string().transform((str) => new Date(str)),
    })
    .partial(),
});
