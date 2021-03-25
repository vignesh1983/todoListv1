const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('view engine', 'ejs');


app.get("/",function(req, res){
    //var day = new Date().getDay();
    var options = {weekday :"long", year:"numeric",month:"long",day:"numeric"};

    var day = new Date().toLocaleString("en-US",options);
    
    //day = 0;
    console.log(day);
    res.render("index",{dayOfWeek: day});
});

app.post("/",function(req,res){
    var task = req.body.task;
    console.log(task);

});

app.listen(3000, function(){
    console.log('Server is listening at port 3000');
})