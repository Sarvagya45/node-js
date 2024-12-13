const fs=require('fs');
fs.writeFileSync("hello.txt","code step by step");
console.log("->",__dirname);
console.log("->",__filename);
//core modules are modules that are impoted when we need to use them