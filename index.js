require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Arvind Sharma')
})

app.listen(process.env.PORT, () => {
  console.log(`visit on port http://localhost:${port}`)
})