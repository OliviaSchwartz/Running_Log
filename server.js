const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Run } = require('./models')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//read all runs route ---> Get
app.get('/runs', async (req, res) => {
  let allRuns = await Run.find({})
  res.json(allRuns)
})

//create Run --> POST
app.post('/runs', async (req, res) => {
  let createdRun = await Run.create(req.body)
  res.json(createdRun)
})

//update runs

//delete run

app.listen(PORT, () => {
  console.log(`Express server listening on: ${PORT}`)
})
