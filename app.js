//Usando el objeto de express
const express = require('express')
    // App de Express
const app = express()
    //Puerto en que vamos a ver nuestra app: localhost:300
const port = 3000

//path inicial, responderá ala url localhost:3000
app.get('/', (req, res) => {
        res.send("Hello word!")
    })
    //Respondiendo texto
app.get('/launchx', (req, res) => {
        res.send('Bienvenido a launchx')
    })
    //Regresar unh objeto
app.get('/explorersInNode', (req, res) => {
        const explorer = { name: "Explorer", msg: "Hello" }
        res.send(explorer)
    })
    //Query params 
app.get('/explorers/:explorerName', (req, res) => {
        res.send(req.params)
    })
    //Inicializamos la app
app.listen(port, () => {
    console.log(`Example app listing on port ${port}`)
})