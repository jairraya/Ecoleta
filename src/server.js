const express = require("express")
const server = express()

// configurar caminhos da minha aplicacao
// pagina inicial
// req: Requisicao
// res: Respostas
server.get("/", (req, res) => {
    res.send("Hello world!")
})


// ligar o servidor
server.listen(3000)