const http=require('http');

http.createServer((req,resp)=>{
    resp.write("<h1>hello world</h1>");
    resp.end();
}).listen(4300);
//another method 
/*

function dataload(req,resp){
    resp.write("<h1>hello world</h1>");
    resp.end();
}
http.createServer(dataload).listen(4300);
*/
//2nd method by arrow function
/*
const dataload=(req,resp)=>{
    resp.write("<h1>hello world</h1>");
    resp.end();
}
http.createServer(dataload).listen(4300);
*/