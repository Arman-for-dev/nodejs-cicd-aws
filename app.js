import express from "express";
import dotenv from "dotenv";
dotenv.config();


import todoRoutes from "./routes/todos.js"

const app = express();


app.use(express.json());


app.use("/api/v1", todoRoutes )



const port = process.env.PORT || 8000;

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)
});