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
    return res.redirect('back');
}