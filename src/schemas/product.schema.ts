import { z } from "zod";

export const addProductSchema = z.object({
  body: z.object({
    title: z
      .string()
      .min(5, { message: "Title must be greater than 5 characters" }),
    price: z.number(),
    description: z
      .string()
      .min(5, { message: "Description must be greater than 8 characters" }),
    image: z.string(),
    rating: z
      .object({
        rate: z.number(),
        count: z.number(),
      })
      .partial(),
  }),
});
