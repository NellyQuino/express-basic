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

app.get('/launchx', (req, res) => {
    res.send('Bienvenido a launchx')
})

//Inicializamos la app
app.listen(port, () => {
    console.log(`Example app listing on port ${port}`)
})