import { Request, Response } from "express";
import * as express from "express";
import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import StatusCodes from "http-status-codes";

//////////////////////////
admin.initializeApp();
//////////////////////////
const db = admin.firestore();
const app = express();
//////////////////////////

// create user should check if user is already exist
//maybe checking in the front end with another function?
const createUser = async (req: Request, res: Response) => {
  try {
    const { email, userName, password } = req.body;

    if (!email || !userName || !password) {
      const result = {
        status: "failed",
        reason: "missing fields",
      };
      res.status(StatusCodes.BAD_REQUEST);
      res.send(JSON.stringify(result));
      return;
    }

    const user = {
      email: email,
      username: userName,
      password: password,
      appColor: null,
      newToApp: true,
    };

    await db.collection("users").add(user);
    const result = {
        status: "succeed",
        reason: "user has been created successfully",
      };

    res.status(200);
    res.send(JSON.stringify(result));
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const userSnapshot = await db.collection("users").doc(userId).get();
    const isUserExist = userSnapshot.exists;

    if (!isUserExist) {
      const result = {
        status: "failed",
        reason: "user ID isn't found",
      };
      res.status(StatusCodes.NOT_FOUND);
      res.send(JSON.stringify(result));
      return;
    }

    const userData = userSnapshot.data();
    const user = { id: userId, ...userData };

    res.status(200);
    res.send(JSON.stringify(user));
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const getUsers = async (req: Request, res: Response) => {
  try {
    const usersSnapshot = await db.collection("users").get();
    console.log(`users snapshot: ${JSON.stringify(usersSnapshot)}`);

    const usersDocs = usersSnapshot.docs;
    console.log(`users docs: ${JSON.stringify(usersDocs)}`);

    const users: any[] = [];

    usersDocs.forEach((doc) => {
      const userId = doc.id;
      const userData = doc.data();

      users.push({ userId, ...userData });
    });

    res.status(200);
    res.send(JSON.stringify(users));
  } catch (error) {}
};

const updateUser = (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("updateUser response");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

//////////////////////////
//////////////////////////
const createTodo = (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("create a todo 2");
  } catch (error) {}
};

const getTodos = async (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("getTodos response");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
};

const updateTodo = (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("update a todo 2");
  } catch (error) {}
};

const deleteTodo = (req: Request, res: Response) => {
  try {
    res.status(200);
    res.send("delete a todo 2");
  } catch (error) {}
};
//////////////////////////
app.post("/create-user", createUser);
app.get("/get-users", getUsers);
app.get("/get-user/:id", getUser);
app.put("/update-user/:id", updateUser);

app.post("/create-todo", createTodo);
app.get("/get-todos/:id", getTodos);
app.put("/update-todo/:id", updateTodo);
app.delete("/delete-todo/:id", deleteTodo);

exports.api = functions.https.onRequest(app);
