import mongoose from 'mongoose'


const MONGODB_URI = process.env.MONGODB_URI

async function connectMongo() {
    try {
        await mongoose.connect(MONGODB_URI!)
    } catch (err) {
        console.log(err)
    }
}
export default connectMongo