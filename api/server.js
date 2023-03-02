import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

try {
    await mongoose.connect(process.env.MONGO);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log('not connected to MongoDB');
}

app.listen(8080, () => {
    console.log('Server is running on port 8080');
})
