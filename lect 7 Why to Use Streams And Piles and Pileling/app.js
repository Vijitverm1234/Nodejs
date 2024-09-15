const fs=require('fs');
const zlib=require('zlib');
const gzib=zlib.createGzip()
const gunZip=zlib.createGunzip();
const readBuffer=fs.createReadStream('./large1.gz','utf8');
const writeStream=fs.createWriteStream('./large2.txt');
// readBuffer.on('data',(chunk)=>{
//     writeStream.write(chunk);
// })
// readBuffer.pipe(gzib).pipe(writeStream);
// for pipe we need source and distination stream 
readBuffer.pipe(gunZip).pipe(writeStream);
