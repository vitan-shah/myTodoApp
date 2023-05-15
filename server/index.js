const express = require("express");
const cors = require("cors")
require("./src/db/mongoose")
const app = express()
const taskRouter = require("./src/routers/task");

const port = 5000 || process.env.PORT;

app.use(cors())
app.use(express.json())

app.use(taskRouter)

app.listen(port,()=>{
    console.log("Server is running on...")
})
