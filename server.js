const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const aluno = create({ nome, email, nome_curso });
    res.status(201).json(aluno);
  });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
