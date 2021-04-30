const express = require('express');

const server = express();

server.use(express.json())

server.get('/', (req,res) =>{
    res.json({message: 'bismillah'})
})

server.listen(4000, console.log(4000))