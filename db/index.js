const mongoose = require('mongoose')

mongoose
  .connect(
    'mongodb+srv://ocmooney:olivia@generalassemblycluster.n1hd9e0.mongodb.net/runsDatabase'
  )
  .then(() => {
    console.log('Successfully connected to MongoDB')
  })
  .catch((e) => {
    console.log('Connection error', e.messages)
  })

const db = mongoose.connection

module.exports = db
