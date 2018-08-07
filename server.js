const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./routes/api/items')

//Initialize express
const app = express()

//Bodyparser middleware
app.use(bodyParser.json())

//DB config
const db = require('./config/keys').mongoURI

//Connect to Mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err))

  //Use routes
  app.use('/api/items', items) //anything that goes to api/items should refer to the items variable

  //Create variable for the port that we'll use to connect to the server
  const port  = process.env.PORT || 5000
  app.listen(port, () => console.log(`Server started on port ${port}`))
