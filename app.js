function sayHello(name){

    console.log("hello "+""+name);
    console.log("Server runing ...");
}

sayHello("Hussein");

var express = require('express');
var path = require('path');
var url = require('url');
var http = require('http');
/*

var fs = require('fs');
*/
const app = express();
app.use('/public',express.static( 'public'));

/*Main ---*/ 
app.get('/', function (req , res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/index.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/types.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/types.html'));
})

app.get('/Features.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Features.html'));
})

app.get('/AboutUs.html',function(req,res){
    res.sendFile(path.join(__dirname,'/AboutUs.html'));   
})

app.get('/signup.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
})

app.get('/forgetThePassword.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/forgetThePassword.html'));
})

app.get('/Coming-Soon.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Coming-Soon.html'));
})

/*Health ---*/
app.get('/Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Health.html'));
})

app.get('/Emotional%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Emotional Health.html'));
})

app.get('/Environmental%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Environmental Health.html'));
})

app.get('/Mental%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Mental Health.html'));
})

app.get('/Social%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Social Health.html'));
})

app.get('/Sperrtual%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Sperrtual Health.html'));
})

app.get('/Physical%20Health.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Physical Health.html'));
})

/*Novels ---*/
app.get('/intro.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/intro.html'));
})

app.get('/Historical.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Historical.html'));
})

app.get('/Biography.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Biography.html'));
})

app.get('/Science%20Fiction.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Science-fiction.html'));
})

app.get('/Horror.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Horror.html'));
})

app.get('/Realistic.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Realistic.html'));
})

app.get('/Emotional.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Emotional.html'));
})
/*Education --*/
app.get('/education.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/education.html'));
})

app.get('/math.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/math.html'));
})

app.get('/physics.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/physics.html'));
})

app.get('/chemistry.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/chemistry.html'));
})

app.get('/english.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/english.html'));
})

app.get('/philosophy.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/philosophy.html'));
})

app.get('/geography.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/geography.html'));
})


/*History --*/

app.get('/History.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/History.html'));
})

app.get('/War.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/War.html'));
})

app.get('/SLAVERY.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/SLAVERY.html'));
})

app.get('/EGYPT.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/EGYPT.htmll'));
})

app.get('/PIRATES.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/PIRATES.html'));
})

app.get('/EARTH.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/EARTH.html'));
})

app.get('/others.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/others.html'));
})

/*Art --*/

app.get('/art.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/art.html'));
})

app.get('/Music.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Music.html'));
})

app.get('/Drawing.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Drawing.html'));
})

app.get('/Theatre.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Theatre.html'));
})

app.get('/Photographic.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Photographic.html'));
})

app.get('/Poetry.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Poetry.html'));
})

app.get('/Dance.html', function (req, res) {
    res.sendFile(path.join(__dirname, '/Dance.html'));
})

app.listen('8080');

/*
const routing=require('./routing')
const server=http.createServer(routing);

server.listen(8080,"127.0.0.1",()=>{
    console.log("srever runing .....")

})
*/
/*
http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var path = url.parse(req.url).pathname
    var filename = "." + q.pathname;
    fs.readFile((filename), function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");

        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(8080);

*/