import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Home from './Home'
import { Link } from 'react-router-dom'

const BlogDetails = (props) => {
  const [blog, setBlog] = useState([])
  let { id } = useParams()
  const [updatedBlog, setUpdatedBlog] = useState([])

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
    run: ''
  })

  const handleBlogChange = (event) => {
    setFormBlogState({
      ...formBlogState,
      [event.target.id]: event.target.value
    })
  }

  const handleBlogSubmit = async (event) => {
    event.preventDefault()
    let newBlog = await axios
      .post(`http://localhost:3001/blogs/`, formBlogState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setBlogState([...blogState, newBlog.data])
    setFormBlogState({
      date: '',
      description: ''
    })
  }

  const handleDelete = async (event) => {
    event.preventDefault()
    let deleteBlog = await axios.delete(`http://localhost:3001/blogs/${id}`)
    setBlog(deleteBlog)
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    let updateBlog = await axios.put(
      `http://localhost:3001/blogs/${id}`,
      formBlogState
    )
    setUpdatedBlog([updatedBlog, updateBlog.data])
    setFormBlogState({ date: '', description: '' })
  }

  return blog ? (
    <div>
      <div>
        <h1 className="runTitle">Run Blog</h1>
        <h3>Run Date</h3>
        <p className="runDetails">{blog.date}</p>
      </div>
      <div>
        <h3>Description:</h3>
        <p className="runDetails">{blog.description} </p>
      </div>
      <div className="newBlog">
        <form onSubmit={handleUpdate}>
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
          <button type="submit">Update Blog</button>
        </form>
        <button onClick={handleDelete}>Delete Blog </button>
        <div className="link">
          <Link className="homeLink" to="/blogs">
            <button>Back to Blogs</button>
          </Link>
        </div>
        <div className="link">
          <Link className="homeLink" to="/runs">
            <button>Back to Running Log</button>
          </Link>
        </div>
      </div>
    </div>
  ) : null
}
export default BlogDetails
