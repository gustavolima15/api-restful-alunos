const express = require('express');
const { create, findAll, findById, update, remove } = require('./repositories/alunoRepository');

const app = express();
const port = process.env.PORT || 3000;

  app.use(express.json());
  app.get('/alunos', (req, res) => {
    const alunos = findAll();
    res.json(alunos);
  });

  app.get('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const aluno = findById(id);
    if (!aluno) return res.status(404).json({ error: 'Aluno não encontrado' });
    res.json(aluno);
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

  app.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const result = remove(id);
    if (!result) return res.status(404).json({ error: 'Aluno não encontrado' });

    res.status(204).send();
  });
  
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
