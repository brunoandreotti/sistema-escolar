const express = require('express')
const router = express.Router()
const alunos = require('../models/alunosModel')

//Rota que retorna alunos
router.get('/all', (req, res) => {
  res.json(JSON.stringify(alunos.getAll()))
})

//Rota para adicionar um aluno
router.post('/new', express.json(), (req, res) => {
  let name = req.body.name
  let score = req.body.score

  if (name == '' || !name || score == '' || !score) {
    res.send('Nome ou nota não informado, por favor informe todos os dados!')
  } else {
    alunos.createAluno(name, score)
    res.send(`Aluno(a) ${name} criado(a) com sucesso`)
  }
})

//Rota para deletar um aluno
router.delete('/delete', express.json(), (req, res) => {
  let id = req.body.id

  if (id == '' || !id) {
    res.send('ID não informado, por favor informe todos os dados!')
  } else {
    alunos.deleteAluno(id)
    res.send(`Aluno com o ID "${id}" deletado com sucesso!`)
  }
})

module.exports = router
