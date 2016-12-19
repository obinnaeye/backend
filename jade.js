var express = require("express");
var port = process.argv[2];
var file = process.argv[3];
var path = require("path");

var app = express();

app.set("views", path.join(__dirname, 'views'));

    /**        OR
    app.set("views", "./views");
    **/

// Let's use the Pug templating language
app.set("view engine", "pug");

app.get("/home", function(request, response) {
    //jade because I used jade.pug
    //use index if you used index.pug
  response.render("jade", { date: new Date().toDateString() });
});

app.listen(port);