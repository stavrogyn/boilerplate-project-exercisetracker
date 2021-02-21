const express = require('express')
const cors = require('cors')
const router = require('./router')
const app = express()
const port = process.env.PORT || 2000
require('dotenv').config()

app.use(cors())
app.use(express.static('public'))
app.use(router)


const listener = app.listen(port, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
