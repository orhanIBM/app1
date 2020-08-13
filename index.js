
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
axios.get("http://172.21.111.34:8080/response").then(response => res.send("ok: "+ JSON.stringify(response))).catch(err => {console.log(err), res.send(JSON.stringify(err))})
})
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
