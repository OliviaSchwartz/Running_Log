import ViewRuns from "../pages/ViewRuns"

const RunningCard= ({onClick, date, distance, time, difficulty, id}) => {
    return (
        <div className="card run-card" onClick={() => onClick(id)}>
            <div className="info-wrapper flex-col">
                <h3>{date}</h3>
                <p>{distance}</p>
            </div>
        </div>
    )
}

export default RunningCard
