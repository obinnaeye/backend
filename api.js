var express = require("express");
var path = require("path");

var app = express();

app.set("views", path.join(__dirname, 'views'));

    /**        OR
    app.set("views", "./views");
    **/

// Let's use the Pug templating language
app.set("view engine", "pug");

app.get("/", function(req, res) {
    //jade because I used jade.pug
    //use index if you used index.pug
    
    var que = req.query;
    var json = {
        "unix": 1450137600, "natural": "December 15, 2015" 
    }
    if(que){
        res.send(json);
    }else{
        res.render("jade");
    }
  
  
  
});

app.listen(8080);