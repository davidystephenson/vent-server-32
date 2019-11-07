const Sequelize = require('sequelize')
const db = require('../db')

const Vent = db.define('vent', {
  name: Sequelize.STRING
})

module.exports = Vent
