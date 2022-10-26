import Header from '../components/Header'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import BlogCard from '../components/RunningCard'
import { useState, useEffect } from 'react'

function ViewBlogs(props) {
  let navigate = useNavigate()

  const [blogState, setBlogState] = useState([])

  const [formBlogState, setFormBlogState] = useState({
    date: '',
    description: '',
    run: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      console.log('this is the API call')
      let response = await axios.get('http://localhost:3001/blogs')
      setBlogState(response.data)
    }
    apiCall()
  }, [])

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

  const viewBlog = (_id) => {
    navigate(`${_id}`)
  }

  return (
    <div className="blogData">
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
      </div>

      <div className="run-container">
        {blogState.map((blog) => (
          <div key={blog._id}>
            <BlogCard
              key={blog._id}
              date={blog.date}
              description={blog.description}
              onClick={() => viewBlog(blog._id)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewBlogs
