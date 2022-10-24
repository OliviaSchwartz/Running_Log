const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Run, Blog } = require('./models')
const runController = require('./controllers/RunController.js')

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

// //Blogs

// //Get ALL blogs --> GET
// app.get('/blogs', async (req, res) => {
//   const allBlogs = await Blog.find({})
//   res.json(allBlogs)
// })

// //create a blog --> POST
// app.post('/blogs', async (req, res) => {
//   let exampleBlogId = '6352b7d9e4d4c6bb3a1cda5b'
//   const requestBody = { ...req.body, brand: exampleBlogId }
//   let createdBlog = await Blog.create(requestBody)
//   res.json({ createdBlog })
// })

// //update a blog --> Post
// app.put('/blogs/:id', async (req, res) => {
//   let updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
//     new: true
//   })
//   res.json(updatedBlog)
// })

// //delete a blog --> Delete
// app.delete('/blogs/:id', async (req, res) => {
//   let deletedBlog = await Run.findByIdAndDelete(req.params.id)
//   res.json(deletedBlog)
// })

app.listen(PORT, () => {
  console.log(`Express server listening on: ${PORT}`)
})
