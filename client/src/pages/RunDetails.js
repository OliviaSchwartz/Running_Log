import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const RunDetails = () => {
  let { id } = useParams()

  const [runDetails, setRunDetails] = useState(null)

  const getRunDetails = async () => {
    let response = await axios.get('http://localhost:3001/runs')
    setRunDetails(response.data)
  }

  useEffect(() => {
    getRunDetails()
  }, [id])

  return (
    <div>
      {runDetails ? (
        <div className="run-content">
          <div>
            <h1>{runDetails.date}</h1>
          </div>
          <section className="details">
            <div className="flex-row game-details">
              <div className="detail">
                <h3>Distance: {runDetails.distance}</h3>
              </div>
              <div className="detail">
                <h3>Time: {runDetails.time}</h3>
              </div>
              <div className="detail">
                <h3>Difficulty: {runDetails.difficulty}</h3>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  )
}

export default RunDetails
