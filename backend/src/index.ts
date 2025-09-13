import express, { Request, Response } from "express";
import cors from "cors";
import { Application } from "express";
import { AuthRouter } from "./router/auth.router";
import { UserRouter } from "./router/user.router";
import { PokemonRouter } from "./router/pokemon.router";
import { ClassificationRouter } from "./router/classification.router";
import { TypeRouter } from "./router/type.router";
import { ResistanceRouter } from "./router/resistance.router";

const PORT: number = 8000;

const app: Application = express();
app.use(express.json());
app.use(cors());

app.get("/api", (req: Request, res: Response) => {
  res.status(200).send({ message: "Welcome to API!" });
});

const authRouter = new AuthRouter();
app.use("/api/auth", authRouter.getRouter());

const userRouter = new UserRouter();
app.use("/api/users", userRouter.getRouter());

const pokemonRouter = new PokemonRouter();
app.use("/api/pokemons", pokemonRouter.getRouter());

const classificationRouter = new ClassificationRouter();
app.use("/api/classifications", classificationRouter.getRouter());

const typeRouter = new TypeRouter();
app.use("/api/types", typeRouter.getRouter());

const resistanceRouter = new ResistanceRouter();
app.use("/api/resistances", resistanceRouter.getRouter());

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}/api`);
});
