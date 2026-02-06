import express from 'express';
import cors from 'cors';
import  connectDB  from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config'
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';




//app configuration
const app = express();
const port = process.env.port || 7000;



//middlewares
app.use(express.json());
app.use(cors());



//database connection
connectDB();


//api endpoints
app.use('/api/food', foodRouter);
app.use("/images", express.static('uploads'));
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);



//routes
app.get('/', (req, res) => {
    res.send('Hello World! This is the backend server.');
});



//server listener
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});




