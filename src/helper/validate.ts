import exp from "constants";
import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validate =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log(req.body);
      await schema.parseAsync({
        params: req.params,
        body: req.body,
        query: req.query,
      });

      return next();
    } catch (error: any) {
      const errorMessage = JSON.parse(error.message);

      res.status(400).json({
        status: "Bad Request!",
        message: errorMessage[0].message,
      });
    }
  };

export default validate;
