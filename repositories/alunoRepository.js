const { v4: uuidv4 } = require('uuid');

let alunos = [];

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

function findAll() {
  return alunos;
}

function findById(id) {
  return alunos.find((aluno) => aluno.id === id);
}

module.exports = { create, findAll, findById, update, remove };