const mongoose = require('mongoose')
const runSchema = require('./run')

const Run = mongoose.model('Run', runSchema)

module.exports = {
  Run
}
