<br />
<p align="center">
    <img src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHNjaG9vbHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="Logo" width="200">

  <h3 align="center">API para Sistema de Gerenciamento Escolar</h3>
 
 <p align="center">
  <a href="#sobre"> Sobre </a> |
  <a href="#rotas-da-aplicação"> Rotas da aplicação </a> |
  <a href="#techs"> Techs </a>

#
<h1 align="center">
    <img src="./readme/projetoescola.gif" alt="gif-readme">
 </h1>
 

# Sobre
A ideia do projeto foi criar uma API de sistema de gerenciamento escolar onde é possível ver a lista, adicionar ou remover alunos, professores e funcionários de uma escola com a finalidade de colocar em prática os conhecimentos iniciais em Node.js e Express que tenho atualmente!


# Rotas da aplicação:
Alunos, professores e funcionários possuem rotas diferentes onde: <br><br>
/alunos => Rota refente aos alunos. <br>
/professores => Rota referente aos professores. <br>
/funcionarios => Rota referente aos funcionários. <br>

Para cada rota acima, é possível listar, adicionar ou remover um aluno/professor/funcináorio:

<b>[GET] </b> -> /**/all : A rota deverá listar todos os alunos, professores ou funcionários cadastrados.<br>

<b>[POST] </b> -> /**/new :  A rota deverá adicionar um novo aluno, professor ou funcionário. <br><br>
 -> Ao cadastrar um novo aluno, a rota deverá receber nome(name) e nota(score) dentro de um objeto JSON no corpo da requisição. O dado deverá ser armazedo dentro de um objeto com o seguinte formato: {name: 'nomeDoAluno', score: 10}.<br><br>
 -> Ao cadastrar um novo professor, a rota deverá receber nome(name) e matéria(subject) dentro de um objeto JSON no corpo da requisição. O dado deverá ser armazedo dentro de um objeto com o seguinte formato: {name: 'nomeDoProfessor', subject: 'nomeDaMatéria'}. <br><br>
 -> Ao cadastrar um novo funcionário, a rota deverá receber nome(name) e função(role) dentro de um objeto JSON no corpo da requisição. O dado deverá ser armazedo dentro de um objeto com o seguinte formato: {name: 'nomeDoProfessor', role: 'nomeDaFunção'}. <br>

<b>[DELETE] </b> -> /**/delete : A rota deverá deletar a obra com o id presente dentro de um objeto JSON no corpo da requisição.<br><br>

Obs: /** -> Rota refente ao grupo a ser acessado.


# Techs: 
- Node.JS
- Express.JS


---

 **Desenvolvido  por [Bruno Andreotti](https://github.com/brunoandreotti).** 
