const express = require('express')
const bodyParser = require('body-parser')

const ventRouter = require('./vent/router')

const app = express()

const jsonParser = bodyParser.json()
app.use(jsonParser)
app.use(ventRouter)

const port = 4000

function onListen () {
  console.log(`Listening on :${port}`)
}

app
  .get(
    '/',
    (request, response) => {
      console.log('test')

      response.send('response')
    }
  )

app.listen(port, onListen)
