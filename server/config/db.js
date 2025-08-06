import mongoose from "mongoose"


// conntecting to the database

const connectDB = async () => {

    mongoose.connection.on('connected', () => console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URI}/asantesk2019`)

}

export default connectDB