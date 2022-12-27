const express = require('express')
const app = express()
const port = 3000
const db = require('./connection')

app.get('/', (req, res) => {
   db.query("SELECT * FROM mahasiswa", (error, result) => {
      res.send(result)
   })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})