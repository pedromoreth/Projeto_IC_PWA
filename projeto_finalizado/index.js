const http = require("http")
const fs = require('fs')
const express = require('express')
const app = express()

const port = 3000

const server = http.createServer((req, res) => {
    fs.readFile('index.html', function(err, data) {

        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write(data)
        return res.end()
    })
})

server.listen(port, () => {
    console.log(`Servidor está rodando na porta: ${port}`)
})

// css
app.use(express.static('css'))