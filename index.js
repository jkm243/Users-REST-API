const express = require('express')
const app = express()
require('./models/dbConfig')
const usersRoutes = require('./routes/usersController');

app.use('/', usersRoutes)

app.listen(5500,()=> console.log('Server started: 5500'))