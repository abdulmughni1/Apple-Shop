import mongoose from 'mongoose'

const connectDB = async (url) => {
  try {
    const conn = await mongoose.connect(url, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      socketTimeoutMS:45000,
      connectTimeoutMS:45000
    })
             
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.error(`Error: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB
