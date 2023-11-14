export const getAllCursos = (req, res) => {
    return res.status(200).send({
        message: 'Todos cursos via controller',
        status: 'okay'
    });
};

export const getCursosID = (req, res) => {
    const {id} = req.params;
    return res.status(200).send({
        message: `Curso por ID: ${id}`,
        origem: 'controller'
    });
};

export const postCursos = (req, res) => {
    const {nome, descricao, limiteVagas } = req.body;

    if(!nome || !descricao || !limiteVagas) {
        return res.status(400).
        send({message: "Dados Inválidos",
              origem: "controller"  })
    }
    return res.status(201).
    send({message: "Rota POST cursos"})
};

export const putCursosByID = (req, res) => {
    const { id } = req.params;
    const { nome, descricao, limiteVagas } = req.body;

    if(!nome || !descricao || !limiteVagas ) {
        return res.status(400).
        send({message: "Dados Inválidos",
              origem: "controller"  })
    }
    return res.status(200).
    send({message: `Rota PUT curso com ID: ${id} `,
          origem: "controller"})
};

export const deleteCursosByID = (req, res) => {
    const { id } = req.params;

    return res.status(200).
    send({message: `Rota DELETE curso com ID: ${id}`,
          origem: `controller` })
};