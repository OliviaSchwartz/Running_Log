const { Schema, model } = require('mongoose')

const runSchema = new Schema(
  {
    date: { type: String, required: true },
    distance: { type: Number, required: true },
    time: { type: Number, required: true },
    difficulty: { type: String, required: true },
    blog: [{ type: Schema.Types.ObjectId, ref: 'Blog' }]
  },
  { timestamps: true }
)
module.exports = runSchema
