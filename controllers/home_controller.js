var tasks_list = [
    {
        desc: "Annual report submission deadline",
        category: "Work",
        date: new Date(2020, 09, 14)
    }
];
module.exports.tasks_list = tasks_list;
module.exports.home = function (req, res) {
    res.render('home',{
        title: "To Do List",
        tasks_list: tasks_list
    });
  }