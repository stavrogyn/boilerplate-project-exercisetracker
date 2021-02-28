const autoBind = require('auto-bind')
const User = require('./user')
const { formatDate, sortByDate } = require('./date')
const { nanoid } = require('nanoid')


class Users {
    constructor() {
        this.users = []
        autoBind(this);
    }

    get availableId() {
        return nanoid();
    }

    get allUsers() {
        return Object.assign([], this.users)
    }

    addUser(user) {
        this.users.push(user)
    }

    createNewUser(username) {
        const newUser = new User(this.availableId, username);
        this.addUser(newUser)
        return newUser
    }

    getUserById(userId) {
        const user = this.users.find(user => user._id == userId)
        if (user != undefined) {
            return user
        }
    }

    addExercise({ userId, description, duration, date }) {
        duration = parseInt(duration)
        date = formatDate(date)
        const user = this.getUserById(userId)
        if (user != undefined) {
            user.log.push({ description, duration, date })
            sortByDate(user.log)
            const excersice = {
                _id: user._id,
                username: user.username,
                date,
                duration,
                description
            }
            return excersice
        }
    }

}

const users = new Users();

module.exports = users