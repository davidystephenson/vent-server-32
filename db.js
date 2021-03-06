const Sequelize = require('sequelize')

const databaseUrl = process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/postgres'

const db = new Sequelize(databaseUrl)

db
  .sync({ force: false })
  .then(() => console.log('database connected'))
  .catch(error => console.error(error))

module.exports = db
