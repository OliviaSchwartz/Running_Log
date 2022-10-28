import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewRuns from './ViewRuns'
import RunningCard from '../components/RunningCard'
import ViewBlogs from './ViewBlogs'
import BlogCard from '../components/BlogCard'
import Home from './Home'

const BlogDetails = (props) => {
  const [blog, setBlog] = useState([])
  let { id } = useParams()
  const [newBlog, setNewBlog] = useState([])
  const [selectedBlog, setSelectedBlog] = useState([])

  useEffect(() => {
    const blogId = async () => {
      let response = await axios.get(`http://localhost:3001/blogs/${id}`)
      setBlog(response.data)
    }
    blogId()
  }, [props.blogs, id])

  const [blogState, setBlogState] = useState([])

  const [formBlogState, setFormBlogState] = useState({
    date: '',
    description: '',
    run: id
  })

  const handleBlogChange = (event) => {
    setFormBlogState({
      ...formBlogState,
      [event.target.id]: event.target.value
    })
  }

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    console.log(formBlogState)
    let newBlog = await axios
      .post('http://localhost:3001/blogs', formBlogState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setBlogState([...blogState, newBlog.data])
    setFormBlogState({
      date: '',
      description: '',
      run: ''
    })
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    let deleteBlog = await axios.delete(`http://localhost:3001/blogs/${id}`)
    setBlog(deleteBlog)
  }

  return blog ? (
    <div>
      <div>
        <h1>{blog.date}</h1>
      </div>
      <div>
        <h3>Description:</h3>
        <p>{blog.description} </p>
      </div>
      <div className="newBlog">
        <h3>Add Another blog:</h3>
        <form onSubmit={handleBlogSubmit}>
          <label htmlFor="Date">Date:</label>
          <input
            id="date"
            value={formBlogState.date}
            onChange={handleBlogChange}
          />
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            value={formBlogState.description}
            onChange={handleBlogChange}
          />
          <button type="submit">Add Blog</button>
        </form>
        <button>Delete Blog </button>
        <button>Update Blog</button>
      </div>
    </div>
  ) : null
}
export default BlogDetails
