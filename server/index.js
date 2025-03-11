import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser'; // Import cookie-parser
import db from './utils/db.js';
import { AdminRoute } from './Routes/AdminRoute.js';




const app = express()
app.use(cookieParser()); // Use cookie-parser middleware
app.use(cors()); // Use cors middleware


// app.use(cors({
//     origin:["http://localhost:5050"],
//     methods:['GET', 'POST', 'PUT','DELETE','PATCH'],
//     credentials:true
// }))
app.use(express.json())
app.use(AdminRoute)




app.listen(5050, ()=> {
    console.log("Server is running")
});