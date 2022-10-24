const { Run } = require('../models')

const getAllRuns = async (req, res) => {
  const runs = await Run.find({})
  res.json(runs)
}

const runByDate = async (req, res) => {
  const dateRun = await Run.findById(req.params.id)
  res.json(dateRun)
}

const createRun = async (req, res) => {
  let createdRun = await Run.create(req.body)
  res.json(createdRun)
}

const updatedRun = async (req, res) => {
  let updatedRun = await Run.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  })
  res.json(updatedRun)
}

const deleteRun = async (req, res) => {
  let deletedRun = await Run.findByIdAndDelete(req.params.id)
  res.json(deletedRun)
}

module.exports = {
  getAllRuns,
  runByDate,
  createRun,
  updatedRun,
  deleteRun
}
