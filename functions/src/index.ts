import * as functions from "firebase-functions";
import * as express from "express";
import {createUser, getUser, updateUser} from "./userController";
import {createTodo, getTodos, updateTodo, deleteTodo} from "./todoController";

const app = express();

app.post("/create-user", createUser);
app.get("/get-user/:id", getUser);
app.put("/update-user/:id", updateUser);

app.post("/create-todo", createTodo);
app.get("/get-todos/:id", getTodos);
app.put("/update-todo/:id", updateTodo);
app.delete("/delete-todo/:id", deleteTodo);

exports.app = functions.https.onRequest(app);
