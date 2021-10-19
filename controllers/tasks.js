const getAllTasks = (req, res) => {
    res.send('all items')
}

const getTask = (req, res) => {
    res.send('get task')
}

const createTask = (req, res) => {
    res.send('create items')
}

const updateTask = (req, res) => {
    res.send('update items')
}

const deleteTask = (req, res) => {
    res.send('delete items')
}



module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}