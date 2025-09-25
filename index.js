const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const tasksRouter = require('./routes/taskRoutes')
const app = express()

app.use(express.json())
app.use(cors())
connectDB()

app.use('/api/task',tasksRouter)

app.listen(3000,()=>{
    console.log('server running on port 3000')
})