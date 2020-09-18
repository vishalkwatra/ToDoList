const Task = require('../models/tasksList');
// var tasks_list = [
//     {
//         desc: "Annual report submission deadline",
//         category: "Work",
//         date: new Date(2020, 09, 14)
//     }
// ];
// module.exports.tasks_list = tasks_list;
module.exports.home = function (req, res) {
    Task.find({}, function (err, tasks) {
        if (err) {
            console.log('Error in fetching tasks from db');
            return;
        }

        res.render('home', {
            title: "To Do List",
            tasks_list: tasks
        });

    })
    // res.render('home',{
    //     title: "To Do List",
    //     tasks_list: tasks_list
    // });
}