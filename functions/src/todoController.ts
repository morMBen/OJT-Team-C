import {Request, Response} from "express";

const createTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send("create todo");
  } catch (error) {
    res.status(500).send(error);
  }
};

const getTodos = async (req: Request, res: Response) => {
  try {
    res.status(200).send("update user todos");
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send("update todo");
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteTodo = async (req: Request, res: Response) => {
  try {
    res.status(200).send("delete todo");
  } catch (error) {
    res.status(500).send(error);
  }
};

export {createTodo, getTodos, updateTodo, deleteTodo};
