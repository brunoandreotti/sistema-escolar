const express = require('express')
const router = express.Router()
const funcionarios = require('../models/funcModel')

//Rota para mostrar a lista de funcionários
router.get('/all', (req, res) => {
  res.json(JSON.stringify(funcionarios.getAll()))
})

//Rota para criar um novo funcionário
router.post('/new', express.json(), (req, res) => {
  let name = req.body.name
  let role = req.body.role

  if (name == '' || !name || role == '' || !role) {
    res.send('Nome ou função não informados, por favor informe todos os dados!')
  } else {
    funcionarios.createFuncio(name, role)
    res.send(`Funcionário(a) ${name} criado(a) com sucesso`)
  }
})

//Rota para deletar um funcionário
router.delete('/delete', express.json(), (req, res) => {
  let id = req.body.id

  if (id == '' || !id) {
    res.send('ID não informado, por favor informe todos os dados!')
  } else {
    funcionarios.deleteFuncionario(id)
    res.send(`Funcionário com o ID "${id} deletado com sucesso!`)
  }
})

module.exports = router
