const express = require('express');
const app = express();

const port = 8000;

app.use('/', require('./routes'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static(__dirname + '/assets'));

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running the server");
    }

    console.log(`Server is running on the port: ${port}`);
});
