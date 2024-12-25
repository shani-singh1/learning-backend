import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/database.js';
import userRouter from './routes/user.js'
const app = express();

dotenv.config()

connectDB();
const PORT = process.env.PORT || 3000

app.use(express.json());

app.use("/api/v1/user", userRouter);

app.listen(PORT, ()=>{
    console.log( `Server listening at ${PORT}`)
})