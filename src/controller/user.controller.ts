import { Request, Response } from "express";
import { User } from "../model/user.model";
import { UserRepository } from "../repository/user/user.repository";
import UserService from "../service/user/user.service";

class UserController {
  public async signUp(req: Request, res: Response) {
    try {
      const newUser = new User();
      newUser.fullname = req.body.fullname;
      newUser.email = req.body.email;
      newUser.password = req.body.password;

      const user = await new UserService().signUp(newUser);

      res.status(201).json({
        status: "Success",
        message: "Successfully create user",
        user: {
          fullname: user.fullname,
          email: user.email,
        },
      });
    } catch (error: any) {
      res.status(201).json({
        status: "Failed",
        message: error.message,
      });
    }
  }

  public async signIn(req: Request, res: Response) {
    try {
      const userParams = new User();
      userParams.fullname = req.body.fullname;
      userParams.email = req.body.email;
      userParams.password = req.body.password;
      const userService = new UserService();
      const user = (await userService.signIn(userParams)) as unknown as User;

      res.status(201).json({
        status: "Success",
        message: "Successfully sign in",
        user: {
          fullname: user.fullname,
          email: user.email,
        },
      });
    } catch (error: any) {
      res.status(201).json({
        status: "Failed",
        message: error.message,
      });
    }
  }

  public async delete(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      await new UserRepository().delete(id);

      res.status(201).json({
        status: "Ok!",
        message: "Successfully delete user",
      });
    } catch (error) {
      res.status(201).json({
        status: "Internal server error",
        message: "Internal server error",
      });
    }
  }

  public async findById(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const newUser = await new UserRepository().findById(id);

      res.status(201).json({
        status: "Ok!",
        message: "Succefully fetch data by id",
        data: newUser,
      });
    } catch (error) {
      res.status(201).json({
        status: "Internal server error",
        message: "Internal server error",
      });
    }
  }

  public async findAll(req: Request, res: Response) {
    try {
      const newUser = await new UserRepository().findAll();

      res.status(201).json({
        status: "Ok!",
        message: "Succefully fetch all data",
        data: newUser,
      });
    } catch (error) {
      res.status(201).json({
        status: "Internal server error",
        message: "Internal server error",
      });
    }
  }

  public async update(req: Request, res: Response) {
    try {
      const id = parseInt(req.params["id"]);
      const newUser = new User();

      newUser.id = id;
      newUser.fullname = req.body.fullname;
      newUser.email = req.body.email;
      newUser.password = req.body.password;
      // await new UserRepository().update(newUser);

      res.status(201).json({
        status: "Ok!",
        message: "Succefully update user",
      });
    } catch (error) {
      res.status(201).json({
        status: "Internal server error",
        message: "Internal server error",
      });
    }
  }
}

export default new UserController();
