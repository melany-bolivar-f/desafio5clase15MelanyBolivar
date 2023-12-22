const mongoose = require('mongoose')

exports.connectDB = async () => {
  await mongoose.connect("mongodb+srv://")
  console.log('Base de datos conectada')
}