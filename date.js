const isValidDate = (date) => {
    const dateReg = /^\d{4}(-)\d{2}\1\d{2}$/
    const dataObject = new Date(date)
    return dateReg.test(date) && (dataObject != 'Invalid Date')
}

const formatDate = (date) => {
    date = isValidDate(date)
        ? new Date(date).toDateString().slice(0, 15)
        : new Date().toDateString().slice(0, 15)
    return date
}

const sortByDate = (arr) => {
    arr.sort(({ date: firstDate }, { date: secondDate }) => new Date(firstDate) - new Date(secondDate))
}

module.exports = { isValidDate, formatDate, sortByDate }