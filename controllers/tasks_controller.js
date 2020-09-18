const homeController = require('../controllers/home_controller');
module.exports.addTask = function (req, res) {
    console.log('In Add Task');
    homeController.tasks_list.push({
        desc: req.body.desc,
        category: req.body.category,
        date: req.body.date
    });
    return res.redirect('/');
}

module.exports.deleteTask = function (req, res) {
    console.log('In Delete Task');
    console.log(req.body);
    for (let index = 0; index < req.body.descr.length; index++) {
        let desc = req.body.descr[index];
        if (req.body.descr[index]) {
            let ind = homeController.tasks_list.findIndex(task_item => task_item.desc === req.body.descr[index]);
            let delElements = homeController.tasks_list.splice(ind, 1);
        }

    }
    return res.redirect('back');
}