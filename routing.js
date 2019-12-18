var url = require('url');
var fs = require('fs');

function handleReq(filepath,res){
fs.readFile(filepath,(err,data)=>{

    if (err) {
        res.end("File not found")
    } else {
        res.end(data)
    }
})

}

function routing(req,res){

    const path = url.parse(req.url).pathname

    switch(path){
        case '/':
            handleReq('index.html',res)
            
            break;
        case '/types.html':
            handleReq('types.html',res)
            break;
        case'/Features.html':
            handleReq('Features.html',res)
            break; 
        case '/AboutUs.html':
            handleReq('public/AboutUs.html', res)
            
            break; 
        default:
                res.end("This page not found");
                break;              
    }
}

module.exports=routing;