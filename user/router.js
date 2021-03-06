const { Router } = require('express')
const User = require('./model')

const { toJWT } = require('./jwt')

const router = new Router()

router.post('/signup', (request, response, next) => {
  const { name, password } = request.body

  User
    .create({ name, password })
    .then(user => response.send(user))
    .catch(next)
})

router.post('/login', (request, response, next) => {
  const { name, password } = request.body

  User
    .findOne({ where: { name, password } })
    .then(user => {
      if (!user) {
        response.send('User not found')
      }

      const { id } = user

      const jwt = toJWT({ userId: id })

      response.send({ jwt })
    })
})

module.exports = router
