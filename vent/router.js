const { Router } = require('express')

const { toData } = require('../user/jwt')

const Vent = require('./model')

const router = Router()

router.get('/vent', (request, response, next) => {
  Vent
    .findAll()
    .then(vents => response.send(vents))
    .catch(next)
})

router.post('/vent', (request, response, next) => {
  // Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTUzNTM2MjIzM something'
  // ['Bearer', 'eyJhb....']

  const { authorization } = request.headers

  if (!authorization) {
    return response.send('You must incluce an authorization header')
  }

  const [, jwt] = authorization.split(' ')
  // const segments = authorization.split(' ')
  // ['Bearer', 'somelongrandomstring']
  // const jwt = segments[1]

  const { userId } = toData(jwt)
  // const unscrambled = toData(jwt)
  // const userId = unscrambled.userId

  Vent
    .create(request.body)
    .then(vent => response.send({
      userId,
      vent
    }))
    .catch(next)
})

module.exports = router
