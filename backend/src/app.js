const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const { errors } = require('celebrate')

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use(errors())


module.exports = app

/**
 * Tipos de parametros:
 * 
 * Query: parametros nomeados enviados na rota apos "?" (filtros, paginacao)
 * Route: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisicao, utilizado para criar ou alterar recursos
 */

/**
 * SQL: MySQL, SQLite, PostgreSQL, etc
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Driver: SELECT * FROM users
 * Query Builder: table("users").select('*').where()
 */
