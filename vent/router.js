const { Router } = require('express')

const Vent = require('./model')

const router = Router()

router.get('/vent', (request, response, next) => {
  Vent
    .findAll()
    .then(vents => response.send(vents))
    .catch(next)
})

router.post('/vent', (request, response, next) => {
  Vent
    .create(request.body)
    .then(vent => response.send(vent))
    .catch(next)
})

module.exports = router
