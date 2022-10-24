import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [runState, updateRunState] = useState([])
  const [blogs, updateBlogs] = useState([])
  const [formState, setFormState] = useState({
    date: '',
    distance: '',
    time: '',
    difficulty: ''
  })
  const [blogState, setBlogState] = useState({
    date: '',
    description: '',
    run: ''
  })

  useEffect(() => {
    const apiCall = async () => {
      console.log('this is the API call')
      let response = await axios.get('http://localhost:3001/products')
      updateRunState(response.data)
    }
    apiCall()
  }, [])

  const handleRunChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleBlogChange = (event) => {
    setBlogState({ ...blogState, [event.target.id]: event.target.value })
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
    updateRunState([...runState, newRun.data])
    setFormState({
      date: '',
      distance: '',
      time: '',
      difficulty: ''
    })
  }

  return (
    <div className="App">
      <header>Running Log and Blog</header>
      <div>
        {' '}
        Running Log
        <h1>All Runs Here</h1>
        {runState.map((run) => (
          <div key={run._id}>
            <h2>{run.date}</h2>
          </div>
        ))}
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
    </div>
  )
}

export default App
