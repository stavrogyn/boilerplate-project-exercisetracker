const express = require('express')
const router = express.Router()
const controller = require('./controller')
const bodyParser = require('body-parser');

const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', controller.sendMainPage);

router.get('/api/exercise/users', controller.getAllUsers)

router.post('/api/exercise/new-user', urlencodedParser, controller.createNewUser)

router.post('/api/exercise/add', urlencodedParser, controller.addExercise)

router.get('/api/exercise/log', controller.getUserExercises)

module.exports = router