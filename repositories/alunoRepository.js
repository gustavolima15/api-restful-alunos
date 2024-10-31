const { v4: uuidv4 } = require('uuid');

let alunos = [];

function create({ nome, email, nome_curso }) {
  const aluno = {
    id: uuidv4(),
    nome,
    email,
    nome_curso,
  };
  alunos.push(aluno);
  return aluno;
}
function remove(id) {
  const index = alunos.findIndex((aluno) => aluno.id === id);
  if (index < 0) return false;

  alunos.splice(index, 1);
  return true;
}


module.exports = { create };