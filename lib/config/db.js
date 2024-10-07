import mongoose from 'mongoose';

export const ConnectDB = async () => {
    await mongoose.connect(process.env.NEXT_MONGOOSE_DATABASE_URL)
    
    // console.log("Database connected")
};