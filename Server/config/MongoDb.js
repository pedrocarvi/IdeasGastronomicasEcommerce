import mongoose from "mongoose";

const connectDatabase = async() => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo connected");
    } catch(e) {
        console.log(`Error: ${e.message}`)
        process.exit(1)
    }
}

export default connectDatabase;