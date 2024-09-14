const fs=require('fs');
// fs.mkdir('tut',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         fs.writeFile('./tut/example.txt',"jsut learning the facts",()=>{
//             if(err){
//                 console.log(err)
//             }
//             else{
//                 console.log("successfully created the file")
//             }
//         })
//     }
// })
// fs.unlink('./tut/example.txt',(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file deleted")
//     }
// })
fs.rmdir('tut',(err)=>{
if(err){
    console.log(err)
}
else{
    console.log("deleted the folder")
}
})