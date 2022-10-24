{/* <header>Running Log and Blog</header>
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
</div> */}
