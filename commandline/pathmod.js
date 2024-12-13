const fs=require('fs');
const path =require ('path');
const dirPath=path.join(__dirname,'files');

//this will create many file in one use 
/*
for(let i=0;i<5;i++){
    fs.writeFileSync(dirPath+"/hello"+i+".txt","a simple text file");
}
*/

//this is used to get the filenames 
fs.readdir(dirPath,(err,files)=>{
    files.forEach((item)=>{
        console.log("file name is "+item)
    })
}) 