const dateFormater = require('./date')

module.exports = class User {
    constructor(id, username) {
        this._id = id;
        this.username = username;
        this.log = [];
    }

    set exercise(exerciseObject) {
        this.log.push(exerciseObject);

    }

    filterLogByFrom(filteredLog, from) {
        if (dateFormater.isValidDate(from)) {
            return filteredLog.filter(({ date }) => {
                const fromDate = new Date(from)
                const logDate = new Date(date)
                return logDate >= fromDate
            })
        } else {
            return filteredLog
        }
    }

    filterLogByTo(filteredLog, to) {
        if (dateFormater.isValidDate(to)) {
            return filteredLog.filter(({ date }) => {
                const toDate = new Date(to)
                const logDate = new Date(date)
                return logDate <= toDate
            })
        } else {
            return filteredLog
        }
    }

    filterLogByLimit(filteredLog, limit) {
        if (limit) limit = parseInt(limit)
        if (typeof limit == 'number' && limit != NaN) {
            return filteredLog.filter((event, index) => index < limit)
        } else {
            return filteredLog
        }
    }

    filteredUser(from, to, limit) {
        let filteredLog = Object.assign([], this.log)
        filteredLog = this.filterLogByFrom(filteredLog, from)
        filteredLog = this.filterLogByTo(filteredLog, to)
        filteredLog = this.filterLogByLimit(filteredLog, limit)
        const filteredUser = {
            ...this,
            log: filteredLog,
            count: filteredLog.length
        }
        return filteredUser
    }

}