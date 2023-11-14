import { Router } from "express";

const rotasAlunos = Router();

rotasAlunos.get("/", (req, res) => {
return res.status(200).send({ message: "Rota GET ALL Alunos" });
});

rotasAlunos.get("/:id", (req, res) => {
    const { id } = req.params;
    return res.status(200). 
    send({ message: `Rota GET Alunos por ID ${id}` });
    });

rotasAlunos.post("/", (req, res) => {
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).
        send({message: "Dados Inválidos"})
    }
    return res.status(201).
    send({message: "Rota POST alunos"})
})

rotasAlunos.put("/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).
        send({message: "Dados Inválidos"})
    }
    return res.status(200).
    send({message: `Rota PUT aluno com ID: ${id} `})
})

rotasAlunos.delete("/:id", (req, res) => {
    const { id } = req.params;

    return res.status(200).
    send({message: `Rota DELETE aluno com ID: ${id} `})
})

    export default rotasAlunos;