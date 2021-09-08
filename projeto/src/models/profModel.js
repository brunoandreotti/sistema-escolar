module.exports = {
  professores: [],

  getAll() {
    return this.professores
  },

  createProf(name, subject) {
    return this.professores.push({ id: generateID(), name, subject })
  },

  deleteProf(id) {
    return this.professores.forEach((prof, i) => {
      if (prof.id == id) {
        this.professores.splice(i, 1)
      }
    })
  }
}

function generateID() {
  return Math.random().toString(36).substr(2, 9)
}
