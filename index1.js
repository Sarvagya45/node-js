const fs=require('fs');
const path=require('path');

const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/hello.txt`;

//to create a file
//fs.writeFileSync(filePath,"a simple text file");

//to read file content
//fs.readFile(filePath,'utf8',(err,item)=>{
//    console.log(item);
//})

//to update file content 
fs.appendFile(filePath,' and file name is hello.txt',(err)=>{
    if(!err){
        console.log("file is updated");
    }
})
    
//to rename 
fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
    console.log("file name is updated");
})

//to delete file
fs.unlinkSync(`${dirPath}/fruit.txt`)