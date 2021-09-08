const express = require('express')
const app = express()
const alunoRoutes = require('./src/routes/alunos')
const profRoutes = require('./src/routes/professores')
const funcioRoutes = require('./src/routes/funcionarios')

app.use('/alunos', alunoRoutes)
app.use('/professores', profRoutes)
app.use('/funcionarios', funcioRoutes)

app.listen(3000, () => console.log('Server Running...'))
