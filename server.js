const express = require('express')
const mongoose = require("mongoose");
const app = express()

const PORT = process.env.PORT || 8000

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(express.static('public'))

app.use(express.urlencoded({ extended: true }))
app.use(express.json()) 

const apiRoutes = require('./routes/api')
const htmlRoutes = require('./routes/html')

apiRoutes(app)
htmlRoutes(app)

app.listen(PORT, function() {
  console.log('App is listening on http://localhost:' + PORT)
})