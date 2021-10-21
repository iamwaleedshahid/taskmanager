require('dotenv').config()
const express = require('express')
const port = 3000
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')

// middleware
app.use(express.json())


// routes
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})


app.use('/api/v1/tasks', tasks)


const start = async () => {
    try {
        await connectDB(process.env.MONGODB_STRING)
        app.listen(port, () => console.log('Server running...'))
    } catch (error) {
        console.log(error)
    }
}
start()



