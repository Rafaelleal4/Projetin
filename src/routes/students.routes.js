import { Router } from "express";
import { 
    deleteStudentByID,
    getAllStudents,
    getStudentsID,
    postStudents,
    putStudentsByID
 } from "../controllers/students.controller.js";

const rotasAlunos = Router();

rotasAlunos.get("/", getAllStudents);

rotasAlunos.get("/:id", getStudentsID);

rotasAlunos.post("/", postStudents);

rotasAlunos.put("/:id", putStudentsByID);

rotasAlunos.delete("/:id", deleteStudentByID);

    export default rotasAlunos;