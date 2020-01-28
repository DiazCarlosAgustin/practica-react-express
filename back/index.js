const express = require('express')
const app = express()
const formidable = require('express-formidable')

const mysql = require('mysql')
const connetion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'fotos'
})
connetion.connect()

app.use(formidable.parse({
    keepExpresions: true 
}))
app.use(express.json())

app.get('/fotos',(req,res)=>{
    connetion.query('SELECT * FROM fotos', (err, result)=>{
        if (err) console.log(err)
        res.json(result)
    })
})

app.listen(5000, ()=>{
    console.log("server on port 3000");
    
})