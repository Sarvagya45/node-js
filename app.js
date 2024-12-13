module.exports={
    g:10,
    h:20,
    i:function(){
        return 10;
    }
}
var arr=[4,5,6,7,7];
let res=arr.filter((item)=>{
//return item===7
return item>5
})
console.log(res);
