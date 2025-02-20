const http=require('http');
const fs=require('fs');

const myServer=http.createServer((req,res)=>{
    const log=`${Date.now()} : ${req.url} New Request Received\n`;
    fs.appendFile('log.txt',log,(err,data)=>{
        switch(req.url){
            case '/': res.end("HomePage");
            break;
            case '/about': res.end('I am Arnob');
            break;
            default: res.end("Not Found");
        }
        //res.end("Hello From Server");
    });
});

myServer.listen(8000,()=>{
    console.log('Server started!');
});