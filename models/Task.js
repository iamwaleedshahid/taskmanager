const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'name required'],
        trim: true,
        maxlength: [20, 'can not be more than 20 chars']
    }, 
    completed:{
        type: Boolean,
        default: false,
    },
})


module.exports = mongoose.model('Task', TaskSchema)