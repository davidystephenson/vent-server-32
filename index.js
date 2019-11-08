const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const ventRouter = require('./vent/router')

const app = express()

const jsonParser = bodyParser.json()
app.use(jsonParser)

const corsMiddleware = cors()
app.use(corsMiddleware)

app.use(ventRouter)

const port = process.env.PORT || 4000

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
