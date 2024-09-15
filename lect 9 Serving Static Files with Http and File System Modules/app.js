const http=require('http');
const fs=require('fs');
http.createServer((req,res)=>{
    const readStream=fs.createReadStream('./static/ckt .png');
    res.writeHead(200,{'content-type':'image/png'});
    readStream.pipe(res);
}).listen(3000)
/*
'content-type':'text/html'
'content-type':'appliaction'
'content-type':'image/png'
*/