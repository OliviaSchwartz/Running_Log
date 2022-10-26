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

  useEffect(() => {
    const blogId = async () => {
      let response = await axios.get(`http://localhost:3001/blogs/${id}`)
      setBlog(response.data)
    }
    blogId()
  }, [props.blogs, id])

  return blog ? (
    <div>
      <div>
        <h1>{blog.date}</h1>
      </div>
      <div>
        <h3>Description:</h3>
        <p>{blog.description} </p>
      </div>
    </div>
  ) : null
}
export default BlogDetails
