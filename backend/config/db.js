// import mongoose from "mongoose";

// export const connectDB = async () => {
//     await mongoose.connect().then(()=>console.log("DB Connected"));
// }


import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};

export default connectDB;
