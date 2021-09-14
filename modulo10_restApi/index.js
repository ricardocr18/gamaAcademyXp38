//inclusão dos pacotes
const express = require('express')
var mysql = require('mysql2');

// Instancia o express
const app = express()

//Definição de porta
const port = 3000

// Abrindo conexao com base de dados
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Linux@31',
  database: 'sistema_noticias'
});

connection.connect()

// Serviço de Hello Word
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Serviço de busca de categorias
app.get('/news-api/v1/categorias', (req, res) => {

    // Aqui faz a busca por categorias
    connection.query('SELECT id, nome FROM sistema_noticias.categoria', function(err, rows, fields) {
      if (err) throw err;
        res.send(rows)
    });    
  })

// Serviço de busca de noticias
app.get('/news-api/v1/categorias/:categoriaId/noticias', (req, res) => {

  res.send(req.params.categoriaId)

  // Aqui faz a busca por categorias
  // connection.query('SELECT id, nome FROM sistema_noticias.categoria', function(err, rows, fields) {
  //   if (err) throw err;
  //     res.send(rows)
  // });    
})

//subindo servidor Node
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
