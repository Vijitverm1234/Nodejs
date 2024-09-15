const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write("hello from '/'");
        res.end();
    }
    if(req.url==='/apple'){
        res.write("A \n P \nP \nL \nE")
        res.end();
    }
})
server.listen('3000');