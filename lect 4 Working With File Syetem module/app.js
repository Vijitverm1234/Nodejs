const fs=require('fs');
// create a file
fs.writeFile('example.txt',"this is some sort of example data ",(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("file created sucessfully ")
        fs.readFile('example.txt','utf8',(err,file)=>{ // utf8 is encoding type
     if(err){
        console.log(err);
     }
     else{

        console.log(file);
     }
        })
    }
});
fs.rename('exampleRenamed.txt','example.txt',(err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("renaming completed")
    }
})
fs.appendFile('example.txt',"some data being appended",(err)=>{
if(err){
    console.log(err)
}
else{
    console.log("Successfully done")
}
})
//fs.unlink(example.txt,()=>{   // for deleting the file 
    