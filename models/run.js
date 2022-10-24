const { Schema, model } = require('mongoose')

const runSchema = new Schema(
  {
    date: { type: String, required: true },
    distance: { type: Number, required: true },
    time: { type: Number, required: true },
    difficulty: { type: String, required: true }
  },
  { timestamps: true }
)
module.exports = runSchema
