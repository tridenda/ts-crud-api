import { Request, Response } from "express";
import { User } from "../model/user.model";
import { UserRepository } from "../repository/user/user.repository";

class UserController {
  public async create(req: Request, res: Response) {
    try {
      const newUser = new User();
      newUser.firstname = req.body.firstname;
      newUser.lastname = req.body.lastname;
      newUser.birthday = req.body.birthday;
      await new UserRepository().save(newUser);

      res.status(201).json({
        status: "Ok!",
        message: "Successfully create user",
      });
    } catch (error) {
      res.status(201).json({
        status: "Internal server error",
        message: "Internal server error",
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
      newUser.firstname = req.body.firstname;
      newUser.lastname = req.body.lastname;
      newUser.birthday = req.body.birthday;
      await new UserRepository().update(newUser);

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
