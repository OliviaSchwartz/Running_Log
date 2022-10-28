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
    window.location.reload()
  }

  const viewRun = (_id) => {
    navigate(`/runs`)
  }

  const viewBlogs = (_id) => {
    navigate(`/blogs/${id}`)
  }

  return run ? (
    <div>
      <div>
        <h1>Run Log</h1>
        <h3>Date</h3>
        <p>{run.date}</p>
      </div>
      <div>
        <h3>Distance:</h3>
        <p>{run.distance}</p>
        <h3>Time (in minutes):</h3>
        <p>{run.time}</p>
      </div>
      <div>
        <h3>Difficulty:</h3>
        <p>{run.difficulty}</p>
      </div>
      <div>
        <button className="link-button" onClick={viewBlogs}>
          View this run's blog
        </button>
        <button onClick={handleDelete}>Delete Run</button>

        <section className="blogCard"></section>

        <section>
          <div className="updateRun" />
          <h4>Update Run Details Here:</h4>
          <h6>
            {' '}
            <em>All inputs required**</em>
          </h6>
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
          </form>
        </section>
      </div>
      <div className="goToLog" />
      <button onClick={viewRun}>Go Back To Log</button>
    </div>
  ) : null
}
export default RunDetails
