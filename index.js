
const express = require('express')
var cors = require('cors')
const axios = require ("axios")

const app = express()
app.use(cors())
const port = 8081

app.get('/', (req, res) => {
  res.send("I'm alive!")
})

app.get("/connect", (req, res)=> {
axios.get("http://api-2-git/response").then(response => res.send(response)).catch(err => {console.log(err), res.send(JSON.stringify(error))})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
