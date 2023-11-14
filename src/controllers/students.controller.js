export const getAllStudents = (req, res) => {
    return res.status(200).send({
        message: 'Todos alunos via controller',
        status: 'okay'
    });
};

export const getStudentsID = (req, res) => {
    const {id} = req.params;
    return res.status(200).send({
        message: `Aluno com ID ${id}`,
        origem: 'controller'
    });
};

export const postStudents = (req, res) => {
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).
        send({message: "Dados Inválidos",
              origem: "controller"  })
    }
    return res.status(201).
    send({message: "Rota POST alunos"})
};

export const putStudentsByID = (req, res) => {
    const { id } = req.params;
    const { nome, email, idade } = req.body;

    if(!nome || !email || !idade) {
        return res.status(400).
        send({message: "Dados Inválidos",
              origem: "controller"  })
    }
    return res.status(200).
    send({message: `Rota PUT aluno com ID: ${id} `,
          origem: "controller"})
};

export const deleteStudentByID = (req, res) => {
    const { id } = req.params;

    return res.status(200).
    send({message: `Rota DELETE aluno com ID: ${id}`,
          origem: `controller` })
};