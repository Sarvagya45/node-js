//import
const app=require('./app')
console.log(app.i())
console.log(app.h)
//declare for variable
var x=20;
let y=30;
const z=40;
console.log(x+y+z);
console.error(x+y)
console.warn(x+z);
//it checks the type of the variable also
if(x===20){
    console.log("matched");
}
//it does not check the type of the variable
if(x=='20'){
    console.log("matched");
}
//array
var arr=[4,5,6,7,7];
console.log(arr);
arr.filter((item)=>{
console.log(item)
})