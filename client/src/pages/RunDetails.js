import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ViewRuns from './ViewRuns'
import RunningCard from '../components/RunningCard'
import Home from './Home'

const RunDetails = (props) => {
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
      <section>
        <button>Write Blog for this Run</button>
      </section>
    </div>
  )
}

export default RunDetails
