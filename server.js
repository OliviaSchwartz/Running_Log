const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Run, Blog } = require('./models')
const runController = require('./controllers/RunController.js')
const blogController = require('./controllers/BlogController')

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger('dev'))
db.on('error', console.log.bind(console, 'MongoDB connection error: '))

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

app.get('/runs', runController.getAllRuns)
app.get('/runs/:id', runController.runByDate)
app.post('/runs', runController.createRun)
app.put('/runs/:id', runController.updatedRun)
app.delete('/runs/:id', runController.deleteRun)

app.get('/blogs', blogController.getAllBlogs)
app.get('/blogs/:id', blogController.blogByDate)
app.post('/blogs', blogController.createBlog)
app.put('/blogs/:id', blogController.updatedBlog)
app.delete('/blogs/:id', blogController.deleteBlog)

app.listen(PORT, () => {
  console.log(`Express server listening on: ${PORT}`)
})
