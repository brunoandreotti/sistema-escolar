module.exports = {
  funcionarios: [],

  getAll() {
    return this.funcionarios
  },

  createFuncio(name, role) {
    return this.funcionarios.push({ id: generateID(), name, role })
  },

  deleteFuncionario(id) {
    return this.funcionarios.forEach((funcio, i) => {
      if (funcio.id == id) {
        this.funcionarios.splice(i, 1)
      }
    })
  }
}

function generateID() {
  return Math.random().toString(36).substr(2, 9)
}
