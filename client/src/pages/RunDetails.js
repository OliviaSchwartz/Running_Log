import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import ViewRuns from './ViewRuns'
import RunningCard from '../components/RunningCard'
import Home from './Home'
import BlogCard from '../components/BlogCard'
import { Link } from 'react-router-dom'
import BlogDetails from './BlogDetails'

const RunDetails = (props) => {
  const [run, setRun] = useState([])
  let { id } = useParams()
  let navigate = useNavigate()

  const [updatedRun, setUpdatedRun] = useState([])
  const [blog, setBlog] = useState([])
  const [formBlogState, setFormBlogState] = useState({
    date: '',
    description: '',
    run: id
  })
  const [blogs, updateBlogs] = useState([])
  const [formState, setFormState] = useState({
    date: '',
    distance: '',
    time: '',
    difficulty: ''
  })

  useEffect(() => {
    const runId = async () => {
      let response = await axios.get(`http://localhost:3001/runs/${id}`)
      setRun(response.data)
    }
    runId()
  }, [props.runs, id])

  const handleDelete = async (event) => {
    event.preventDefault()
    let deleteRun = await axios.delete(`http://localhost:3001/runs/${id}`)
    setRun(deleteRun)
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleUpdate = async (event) => {
    event.preventDefault()
    let updateRun = await axios.put(
      `http://localhost:3001/runs/${id}`,
      formState
    )
    setUpdatedRun([updatedRun, updateRun.data])
    setFormState({ date: '', distance: '', time: '', difficulty: '' })
  }

  const viewRun = (_id) => {
    navigate(`/runs`)
  }

  const viewBlog = (id) => {
    navigate(`/blogs/${id}`)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let addedBlog = await axios
      .post('http://localhost:3001/blogs', { ...formBlogState, runId: run.id })
      .then((response) => {
        console.log(response)
        return response
      })
      .catch((error) => {
        return error
      })
    updateBlogs([...blogs, addedBlog.data])
    setFormBlogState({
      date: '',
      description: '',
      run: id
    })
    navigate('/blogs')
  }

  const handleBlogChange = (event) => {
    setFormBlogState({
      ...formBlogState,
      [event.target.id]: event.target.value
    })
  }

  return run ? (
    <div>
      <div>
        <h1 className="runTitle">Run Log</h1>
        <h3>Date</h3>
        <p className="runDetails">{run.date}</p>
      </div>
      <div>
        <h3>Distance:</h3>
        <p className="runDetails">{run.distance}</p>
        <h3>Time (in minutes):</h3>
        <p className="runDetails">{run.time}</p>
      </div>
      <div>
        <h3>Difficulty:</h3>
        <p className="runDetails">{run.difficulty}</p>
      </div>
      <div>
        <section className="blogCard"></section>

        <section>
          <div className="updateRun" />

          <form onSubmit={handleUpdate}>
            <label htmlFor="Date">Date:</label>
            <input
              id="date"
              value={formState.date}
              placeholder="MM/DD/YY"
              onChange={handleChange}
            />
            <label htmlFor="distance">Distance:</label>
            <input
              id="distance"
              value={formState.distance}
              placeholder="Distance (In Miles)"
              onChange={handleChange}
            />
            <label htmlFor="time">Time:</label>
            <input
              id="time"
              value={formState.time}
              placeholder="Time (In Minutes)"
              onChange={handleChange}
            />
            <label htmlFor="difficuly">Difficulty:</label>
            <input
              id="difficulty"
              value={formState.difficulty}
              placeholder="1(Easy)-5(Hard)"
              onChange={handleChange}
            />
            <button type="submit">Update Run</button>
            <h6>
              <em>All inputs required**</em>
            </h6>
          </form>
        </section>
      </div>
      <form className="blogform" onSubmit={handleSubmit}>
        <h3 className="blogAdd">Add A New Blog Post: </h3>
        <label className="blogData" htmlFor="date">
          Date:{' '}
        </label>
        <input
          id="date"
          value={formBlogState.date}
          onChange={handleBlogChange}
        />
        <label className="blogData" htmlFor="description">
          Description:
        </label>
        <input
          id="description"
          value={formBlogState.description}
          onChange={handleBlogChange}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
      <section className="button-container">
        <button className="link-button" onClick={viewBlog}>
          View this run's blog
        </button>
        <button onClick={handleDelete}>Delete Run</button>
        <div className="goToLog" />
        <button onClick={viewRun}>Go Back To Log</button>
      </section>
    </div>
  ) : null
}
export default RunDetails
