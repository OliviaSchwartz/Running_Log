const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Run, Blog } = require('./models')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//read all runs route ---> Get
app.get('/runs', async (req, res) => {
  let allRuns = await Run.find({})
  res.json(allRuns)
})

//create Run --> POST
app.post('/runs', async (req, res) => {
  let createdRun = await Run.create(req.body)
  res.json(createdRun)
})

//update runs
app.put('/runs/:id', async (req, res) => {
  let updatedRun = await Run.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedRun)
})

//delete run
app.delete('/run/:id', async (req, res) => {
  let deletedRun = await Run.findByIdAndDelete(req.params.id)
  res.json(deletedRun)
})
//Blogs

//Get ALL blogs --> GET
app.get('/blogs', async (req, res) => {
  const allBlogs = await Blog.find({})
  res.json(allBlogs)
})

//create a blog --> POST
app.post('/blogs', async (req, res) => {
  let exampleBlogId = '6352b7d9e4d4c6bb3a1cda5b'
  const requestBody = { ...req.body, brand: exampleBlogId }
  let createdBlog = await Blog.create(requestBody)
  res.json({ createdBlog })
})

//update a blog --> Post

//delete a blog --> Delete

app.listen(PORT, () => {
  console.log(`Express server listening on: ${PORT}`)
})
