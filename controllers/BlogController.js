const { Blog } = require('../models')

const getAllBlogs = async (req, res) => {
  const blogs = await Blog.find({})
  res.json(blogs)
}

const blogByDate = async (req, res) => {
  const dateBlog = await Blog.findById(req.params.id)
  res.json(dateBlog)
}

const createBlog = async (req, res) => {
  let createdBlog = await Blog.create(req.body)
  res.json(createdBlog)
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
