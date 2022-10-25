import Header from '../components/Header'
import axios from 'axios'
import { Link, Navigate } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import RunningCard from '../components/RunningCard'
import { useState, useEffect } from 'react'

function ViewRuns() {
  let navigate = useNavigate()

  const [runState, setRunState] = useState([])

  const [formState, setFormState] = useState({
    date: '',
    distance: '',
    time: '',
    difficulty: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      console.log('this is the API call')
      let response = await axios.get('http://localhost:3001/runs')
      setRunState(response.data)
    }
    apiCall()
  }, [])

  const handleRunChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleRunSubmit = async (event) => {
    event.preventDefault()
    console.log(formState)
    let newRun = await axios
      .post('http://localhost:3001/runs', formState)
      .then((response) => {
        return response
      })
      .catch((error) => {
        console.log(error)
      })
    setRunState([...runState, newRun.data])
    setFormState({
      date: '',
      distance: '',
      time: '',
      difficulty: ''
    })
  }

  const viewRun = (id) => {
    navigate(`/runs/${id}`)
  }

  return (
    <div className="runData">
      <div className="newRun">
        <h3>Add Another Run:</h3>
        <form onSubmit={handleRunSubmit}>
          <label htmlFor="Date">Date:</label>
          <input id="date" value={formState.date} onChange={handleRunChange} />
          <label htmlFor="distance">Distance:</label>
          <input
            id="distance"
            value={formState.distance}
            onChange={handleRunChange}
          />
          <label htmlFor="time">Time:</label>
          <input id="time" value={formState.time} onChange={handleRunChange} />
          <label htmlFor="difficuly">Difficulty:</label>
          <input
            id="difficulty"
            value={formState.difficulty}
            onChange={handleRunChange}
          />
          <button type="submit">Add Run</button>
        </form>
      </div>

      <div className="run-container">
        {runState.map((run) => (
          <div key={run._id}>
            <RunningCard
              key={run._id}
              date={run.date}
              distance={run.distance}
              time={run.time}
              difficulty={run.difficulty}
              onClick={viewRun}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ViewRuns