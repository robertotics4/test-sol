const express = require('express')
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  return res.json({
    message: 'Hello World'
  })
})

app.listen(3000, () => {
  console.log('Aplicação subiu na porta 3000')
})