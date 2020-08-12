
const express = require('express')
const app = express()
const port = 8081
const axios = require ("axios")

app.get('/live', (req, res) => {
  res.send('Alive!')
})

app.get("/connect", (req, res)=> {
axios.get("/app-1-git/response").then(response => res.send(response)).catch(err => {console.log(err), res.send(JSON.stringify(error))})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
