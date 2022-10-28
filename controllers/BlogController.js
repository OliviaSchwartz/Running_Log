const { Blog, Run } = require('../models')

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs)
}

const blogByDate = async (req, res) => {
  const dateBlog = await Blog.findById(req.params.id).populate('run')
  res.json(dateBlog)
}

const createBlog = async (req, res) => {
  try {
    let newBlog = await Blog.create(req.body)
    console.log(newBlog)
    let updatedRun = await Run.findById(req.params.id)
    updatedRun.run.push(newBlog._id)
    await blog.save()
    res.send(newBlog)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updatedBlog = async (req, res) => {
  let updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedBlog)
}

const deleteBlog = async (req, res) => {
  let deletedBlog = await Blog.findByIdAndDelete(req.params.id)
  res.json(deletedBlog)
}

module.exports = {
  getAllBlogs,
  blogByDate,
  createBlog,
  updatedBlog,
  deleteBlog
}
