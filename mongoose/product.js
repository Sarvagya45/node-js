const mongoose=require('mongoose');
const productSchema=mongoose.Schema({
    name:String,
    brand:String,
    price:Number
});
module.exports=mongoose.model("products",productSchema);