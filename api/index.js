import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoute from './routes/user.route.js'
import authRouter from './routes/auth.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('connected to MongoDb');
})
.catch((err)=>{
    console.log(err);
})



const app = express();

app.listen(3010,()=>{
    console.log('server is running on 4000');
}
);

app.get('/test',(req,res)=>{
    res.json({
        message:"HELLO world",
    });
});

app.use("/api/user",userRoute);
app.use("/api/auth",authRouter);