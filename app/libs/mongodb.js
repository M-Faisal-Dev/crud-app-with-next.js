import mongoose from "mongoose"

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_SERVER);
    console.log("Database is connected");
  } catch (error) {
   console.log("Database is not connected")
  }
};

export default dbConnection;
