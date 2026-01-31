import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://manglamsingh555_db_user:Bhardwaj$456@cluster0.mxjcpqq.mongodb.net/food-del').then(() => {
        console.log("MongoDB connected successfully");
    })
};

export default connectDB;