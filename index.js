
const express = require('express')
const app = express()
const port = 8081
const axios = require ("axios")

app.get('/', (req, res) => {
  res.send("I'm alive!")
})

app.get("/connect", (req, res)=> {
axios.get("172.21.111.34/response").then(response => res.send(response)).catch(err => {console.log(err), res.send(JSON.stringify(error))})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
