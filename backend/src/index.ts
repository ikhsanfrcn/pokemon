import express, { Request, Response } from "express";
import cors from "cors";
import { Application } from "express";
import { AuthRouter } from "./router/auth.router";
import { UserRouter } from "./router/user.router";
// import { ItemRouter } from "./router/item.router";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to API!" });
});

const authRouter = new AuthRouter();
app.use("/api/auth", authRouter.getRouter());

const userRouter = new UserRouter
app.use("/api/users", userRouter.getRouter())

// const itemRouter = new ItemRouter();
// app.use("/api/items", itemRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/api`);
});
