import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import BlogCard from '../components/BlogCard'

const Blogs = () => {
  const [formState, setFormState] = useState({ date: '', description: '' })
  const [blogs, updateBlogs] = useState([])
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  useEffect(() => {
    const apiCall = async () => {
      let response = await axios.get(`http://localhost:3001/blogs/${blogs}`)
      updateBlogs(response.data)
    }
    apiCall()
  }, [])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedBlog = await axios
      .post('http://localhost:3001/blogs', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        return error
      })
    updateBlogs([...blogs, addedBlog.data])
    setFormState({
      date: '',
      description: ''
    })
    navigate('/blogs')
  }

  const viewBlog = (_id) => {
    navigate(`${_id}`)
  }

  return (
    <div>
      <h1>Running Blogs</h1>
      <form className="form" onSubmit={handleSubmit}>
        <h3 className="blogTitle">Add Blog Post: </h3>
        <label htmlFor="date">Date: </label>
        <input id="date" value={formState.date} onChange={handleChange} />
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          value={formState.description}
          onChange={handleChange}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <div className="blogs">
        <div className="run-container">
          {blogs.map((blog) => (
            <div key={blog._id}>
              <BlogCard
                date={blog.date}
                description={blog.description}
                onClick={() => viewBlog(blog._id)}
              />
            </div>
          ))}

          <button className="link-button">
            {' '}
            <Link className="link" to="/">
              Back to Home
            </Link>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Blogs
