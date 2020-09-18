const homeController = require('../controllers/home_controller');
const Task = require('../models/tasksList');

module.exports.addTask = function (req, res) {
    console.log('In Add Task');
    // homeController.tasks_list.push({
    //     desc: req.body.desc,
    //     category: req.body.category,
    //     date: req.body.date
    // });
    // return res.redirect('/');
    Task.create({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    }, function (err, newTask) {
        if (err) {
            console.log('Error in adding new Task');
            return;
        }
        console.log('*******', newTask);
        return res.redirect('back');
    });

}

module.exports.deleteTask = function (req, res) {
    // console.log('In Delete Task');
    // console.log(req.body);
    // for (let index = 0; index < req.body.descr.length; index++) {
    //     let desc = req.body.descr[index];
    //     if (req.body.descr[index]) {
    //         let ind = homeController.tasks_list.findIndex(task_item => task_item.desc === req.body.descr[index]);
    //         let delElements = homeController.tasks_list.splice(ind, 1);
    //     }

    // }

    // return res.redirect('back');

    console.log('In Delete Task');
    console.log(req.body);
    for (let index = 0; index < req.body.descr.length; index++) {
        let desc = req.body.descr[index];
        if (req.body.descr[index]) {
            Task.deleteOne({ desc: req.body.descr[index] }, function (err) {
                if (err) {
                    console.log('Error in deleting the task from database');
                    return;
                }

                return res.redirect('back');
            })
        }

    }


}