import ViewRuns from "../pages/ViewRuns"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

const RunningCard= ({onClick, date, distance, time, difficulty, id}) => {

    return (
        <div className="card run-card"onClick={() => onClick(id)}  >
            <div className="info-wrapper flex-col">
                <h3>Run Date: {date}</h3>
                <p>Distance:{distance}</p>
                <p>Time (minutes): {time} </p>
                <p>Run difficulty: {difficulty}</p>

            </div>
        </div>
    )
}

export default RunningCard
