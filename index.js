const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static(__dirname+'/pages'))
 
app.get('/', function (req, res) {
  res.sendFile(__dirname+'/pages/index.html') 
})
 
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))