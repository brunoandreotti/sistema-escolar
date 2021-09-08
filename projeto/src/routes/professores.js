const express = require('express')
const router = express.Router()
const prof = require('../models/profModel')

//Rota para listar os professores
router.get('/all', (req, res) => {
  res.json(JSON.stringify(prof.getAll()))
})

//Rota para adicionar um professor
router.post('/new', express.json(), (req, res) => {
  let name = req.body.name
  let subject = req.body.subject

  if (name == '' || !name || subject == '' || !subject) {
    res.send('Nome ou função não informados, por favor informe todos os dados!')
  } else {
    prof.createProf(name, subject)
    res.send(`Professor(a) ${name} foi criado(a) com sucesso!`)
  }
})

//Rota para deletar um professor
router.delete('/delete', express.json(), (req, res) => {
  let id = req.body.id

  if (id == '' || !id) {
    res.send('ID não informado, por favor informe todos os dados!')
  } else {
    prof.deleteProf(id)
    res.send(`Professor com o ID "${id}" foi excluído com sucesso!`)
  }
})

module.exports = router
