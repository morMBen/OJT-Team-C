import {Request, Response} from "express";

const createUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send("create user");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send("get user");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    res.status(200).send("update user");
  } catch (error) {
    res.status(500).send(error);
  }
};

export {createUser, getUser, updateUser};
