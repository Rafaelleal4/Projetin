import { Router } from "express";
import rotasAlunos from "./students.routes.js";

const rotas = Router();

rotas.use("/alunos", rotasAlunos);

rotas.get("/", (req, res) => {
return res.status(200).send({ message: "Server Okay!" });
})
export default rotas;