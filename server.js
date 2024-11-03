const express = require('express');
const { create } = require('./repositories/alunoRepository');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/alunos', (req, res) => {
  const alunos = findAll();
  res.json(alunos);
});
app.post('/alunos', (req, res) => {
    const { nome, email, nome_curso } = req.body;
    const aluno = create({ nome, email, nome_curso });
    res.status(201).json(aluno);
  });
  
  app.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, email, nome_curso } = req.body;
    const aluno = update(id, { nome, email, nome_curso });
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
  
    res.json(aluno);
  });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
