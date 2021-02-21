const autoBind = require('auto-bind')

class DateWorker {
    constructor() {
        autoBind(this);
    }

    isValidDate(date) {
        const dateReg = /^\d{4}(-)\d{2}\1\d{2}$/
        const dataObject = new Date(date)
        return dateReg.test(date) && (dataObject != 'Invalid Date')
    }

    formatDate(date) {
        date = this.isValidDate(date)
            ? new Date(date).toDateString().slice(0, 15)
            : new Date().toDateString().slice(0, 15)
        return date
    }

    sortByDate({ date: firstDate }, { date: secondDate }) {
        return new Date(firstDate) - new Date(secondDate)
    }

}

const dateFormater = new DateWorker();

module.exports = dateFormater