import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewRuns from './ViewRuns'
import RunningCard from '../components/RunningCard'
import Home from './Home'

const RunDetails = (props) => {
  const [run, setRun] = useState([])
  let { id } = useParams()

  useEffect(() => {
    const runId = async () => {
      let response = await axios.get(`http://localhost:3001/runs/${id}`)
      setRun(response.data)
    }
    runId()
  }, [props.runs, id])

  return run ? (
    <div>
      <div>
        <h1>{run.date}</h1>
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
        <button>View Blog For Run</button>
        <button>Delete Run</button>
        <div className="Update Run" />
        <button>Update Run</button>
      </div>
    </div>
  ) : null
}
export default RunDetails
