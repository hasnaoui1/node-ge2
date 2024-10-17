//1. importations
const express = require('express')


//2. initialisations
const server = express()
server.use(express.json())

//3.traitements
require('./api.routes')(server)







server.get('/',(req,res)=>{
    res.send('hello');
})


      




//4.lancement du serveur

server.listen(3000)
