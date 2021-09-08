module.exports = {
  alunos: [],

  getAll() {
    return this.alunos
  },

  createAluno(name, score) {
    return this.alunos.push({ id: generateID(), name, score })
  },

  deleteAluno(id) {
    return this.alunos.forEach((aluno, i) => {
      if (aluno.id == id) {
        this.alunos.splice(i, 1)
      }
    })
  }
}

function generateID() {
  return Math.random().toString(36).substr(2, 9)
}
