const fs=require('fs');
const readStream=fs.createReadStream('example.txt','utf8');
// readStream.on('data',(chunk)=>{
//     console.log(chunk)
// })
// we do not have to wait for whole file to load we need only chunks as a whole
const writeStream=fs.createWriteStream('example2.txt');
readStream.on('data',(chunk)=>{
   writeStream.write(chunk);
})