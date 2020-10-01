const express = require('express')
const app = express()
const router = express.Router()
require('dotenv').config()
const PORT = process.env.PORT

app.use(express.static(__dirname+'/app'))
 
router.get('/',(req, res) => {
  res.sendFile(__dirname+'/app/index.html') 
})
 
app.listen(PORT, () => console.log(`Escutando na porta ${PORT}`))