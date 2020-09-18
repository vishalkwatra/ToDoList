const mongoose = require('mongoose');

const taskScehma = new mongoose.Schema({
    desc: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    }
}
);

const Task = mongoose.model('Task', taskScehma);

module.exports = Task;