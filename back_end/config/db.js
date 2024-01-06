import mongoose from "mongoose";
const connectDB = async () => {
    try {
       const con = await mongoose.connect(process.env.MONGO_URI)   
        console.log(`MongoDB is connected With your Server ${con.connection.host}`);
    }
    catch (error){
        console.log(`-The Error : ${error} `);
    }
}
export default connectDB