import { Router } from "express";
import { 
    deleteCursosByID,
    getAllCursos,
    getCursosID,
    postCursos,
    putCursosByID
 } from "../controllers/cursos.controller.js";

const rotasCursos = Router();

rotasCursos.get("/", getAllCursos);

rotasCursos.get("/:id", getCursosID);

rotasCursos.post("/", postCursos);

rotasCursos.put("/:id", putCursosByID);

rotasCursos.delete("/:id", deleteCursosByID);

    export default rotasCursos;