function create({ nome, email, nome_curso }) {

  try {
    const aluno = {
      id: uuidv4(),
      nome,
      email,
      nome_curso,
    };
    alunos.push(aluno);
    console.log('Aluno cadastrado com sucesso!')
    return aluno;

  } catch (error) {
    console.error(error)
    console.log('Deu erro ao criar')

  }

}
function remove(id) {
 try {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index < 0) return false;

  alunos.splice(index, 1);
  console.log('Aluno removido com sucesso!')
  return true;
  
 } catch (error) {

  console.error(error)
  console.log('Deu erro ao criar')
  
 }
}

function update(id, { nome, email, nome_curso }) {
  try {

    const index = alunos.findIndex(aluno => aluno.id === id);
  if (index === -1) {
    console.log('Aluno atualizado com sucesso!')
    return null;
  }
  alunos[index] = {
    id,
    nome,
    email,
    nome_curso

  };
  return alunos[index];
    
  } catch (error) {

    console.error(error)
    console.log('Deu erro ao criar')
    
  }
}

app.delete('/alunos/:id', (req, res) => {
  const { id } = req.params;
  const result = remove(id);
  if (!result) return res.status(404).json({ error: 'Aluno não encontrado' });

  res.status(204).send();
});

function findAll() {
  return alunos;
}