const autoBind = require('auto-bind')
const users = require('./users')


class Controller {
    constructor() {
        autoBind(this);
    }

    sendMainPage(req, res) {
        res.sendFile(__dirname + '/views/index.html')
    }

    getAllUsers(req, res) {
        const allUsers = users.allUsers.map(user => ({ _id: user._id, username: user.username }))
        res.json(allUsers)
    }

    createNewUser(req, res) {
        const username = req.body.username
        res.json(users.createNewUser(username))
    }

    addExercise(req, res) {
        const exerciseParams = req.body
        res.json(users.addExercise(exerciseParams))
    }

    getUserExercises({ query: { userId, from, to, limit } }, res) {
        const user = users.getUserById(userId)
        if (user != undefined) {
            const filteredUser = user.filteredUser(from, to, limit)
            res.json(filteredUser)
        }
        else {
            res.status(404)
        }
    }

}

const controller = new Controller();

module.exports = controller