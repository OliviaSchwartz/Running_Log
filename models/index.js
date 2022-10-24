const mongoose = require('mongoose')
const runSchema = require('./run')
const blogSchema = require('./blog')

const Run = mongoose.model('Run', runSchema)

const Blog = mongoose.model('Blog', blogSchema)

module.exports = {
  Run,
  Blog
}
