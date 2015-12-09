var http = require('http');
var url = require('url');

function start(route,handle){
    http.createServer(function(request,response){
        var pathName = url.parse(request.url).pathname;
        console.log("Request for " + pathName +" received.");
        
        route(handle,pathName,response,request);
        
    }).listen(8888);
}

exports.start = start;
