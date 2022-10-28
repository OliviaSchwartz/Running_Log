const { Schema } = require('mongoose')

const blogSchema = new Schema(
  {
    date: { type: String, required: true },
    description: { type: String, required: true },
    run: [{ type: Schema.Types.ObjectId, ref: 'Run' }]
  },
  { timestamps: true }
)
module.exports = blogSchema
