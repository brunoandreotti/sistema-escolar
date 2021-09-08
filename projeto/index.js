const express = require('express')
const app = express()
const alunoRoutes = require('./routes/alunos')
const profRoutes = require('./routes/professores')
const funcioRoutes = require('./routes/funcionarios')

app.use('/alunos', alunoRoutes)
app.use('/professores', profRoutes)
app.use('/funcionarios', funcioRoutes)

app.listen(3000, () => console.log('Server Running...'))
