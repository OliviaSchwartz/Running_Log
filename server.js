const express = require('express')
const PORT = process.env.PORT || 3001
const db = require('./db')
const { Run } = require('./models')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send({ msg: 'This route is being hit' })
})

//Run Routes

//create Run
app.post('/runs', async (req, res) => {
  let createdRun = await Run.create(req.body)
  res.send(createdRun)
})

app.listen(PORT, () => {
  console.log(`Express server listening on: ${PORT}`)
})
