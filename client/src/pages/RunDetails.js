import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewRuns from './ViewRuns'
import RunningCard from '../components/RunningCard'
import Home from './Home'

const RunDetails = (props) => {
  // const [runDetails, setRunDetails] = useState({})

  // let { _id } = useParams()

  // useEffect(() => {
  //   let isCancelled = false
  //   const getRunDetails = async () => {
  //     const response = await axios.get(`https://localhost:3001/runs/${_id}`)
  //     if (!isCancelled) {
  //       setRunDetails(response.data)
  //     }
  //   }
  //   getRunDetails()
  //   return () => {
  //     isCancelled = true
  //   }
  // }, [_id])

  return (
    <div className="run-content">
      <div>
        <h1>{props.date}</h1>
      </div>
      <section className="details">
        <div className="flex-row game-details">
          <div className="detail">
            <h3>Distance: {props.distance}</h3>
          </div>
          <div className="detail">
            <h3>Time: {props.time}</h3>
          </div>
          <div className="detail">
            <h3>Difficulty: {props.difficulty}</h3>
          </div>
        </div>
      </section>

      <section>
        <button>Update</button>
      </section>
      <section>
        <button>Delete Run</button>
      </section>
    </div>
  )
}

export default RunDetails

//   const id = props.id
//   // let { id } = useParams()
//   const [runDetails, setRunDetails] = useState({})
//   const getRunDetails = async () => {
//     let response = await axios.get(`http://localhost:3001/runs/`)
//     setRunDetails(response.data)
//   }
//   useEffect(() => {
//     getRunDetails()
//   }, [id])
//   return (
//     <div>
//       {runDetails ? (
//         <div className="run-content">
//           <div>
//             <h1>{props.date}</h1>
//           </div>
//           <section className="details">
//             <div className="flex-row game-details">
//               <div className="detail">
//                 <h3>Distance: {runDetails.distance}</h3>
//               </div>
//               <div className="detail">
//                 <h3>Time: {runDetails.time}</h3>
//               </div>
//               <div className="detail">
//                 <h3>Difficulty: {runDetails.difficulty}</h3>
//               </div>
//             </div>
//           </section>
//         </div>
//       ) : (
//         <h1>Loading...</h1>
//       )}
//     </div>
//   )
// }
