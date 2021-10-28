require('dotenv').config()
const express = require('express')
const port = 3000
const app = express()
const tasks = require('./routes/tasks')
const auth = require('./routes/auth')
const connectDB = require('./db/connect')

// middleware
app.use(express.static('./public'))
app.use(express.json())


// routes
app.use('/api/v1/tasks', tasks)
app.use('/api/v1/auth', auth)


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_STRING)
        app.listen(port, () => console.log('Server running...'))
    } catch (error) {
        console.log(error)
    }
}
start()



