const express = require('express')
const cors = require('cors')
const server = express()
const db = require('./util/database')
const {Base, Favorite, Extra} = require('./util/models')
const seed = require('./seed/seed')
const {getOptions} = require('./controllers/drinksController')

server.use(express.json())
server.use(cors())

Base.hasMany(Favorite)
Favorite.belongsTo(Base)
Extra.hasMany(Favorite)
Favorite.belongsTo(Extra)

server.get('/api/getOptions', getOptions)

// db
//   .sync({force:true})
//   .then(() => seed())

server.listen(4000, () => console.log('running on 4000 yo'))