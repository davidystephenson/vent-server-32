const express = require('express')

const app = express()

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

      console.log('after')
    }
  )

app.listen(port, onListen)
