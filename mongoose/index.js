const mongoose=require('mongoose');

 //we can use 0.0.0.0 in place of localhost
 mongoose.connect("mongodb://0.0.0.0:27017/e-comm");
 const ProductSchema= new mongoose.Schema({
     name:String,
     price:Number
 });
//crud
const createindb = async()=>{
   
    const Product=mongoose.model('products',ProductSchema);
    let data =new Product({name:"m30",price:34000});
    let result =await data.save();
    console.log(result);
}

const updateindb = async()=>{
   
    const Product=mongoose.model('products',ProductSchema);
    let data =await Product.updateOne(
        {name:"m30"},
        {
            $set:{price:30000}
        }
    );
    
    console.log(data);
}

const deleteindb = async()=>{
   
    const Product=mongoose.model('products',ProductSchema);
    let data =await Product.deleteOne({name:"m30"});
    
    console.log(data);
}

const readindb = async()=>{
   
    const Product=mongoose.model('products',ProductSchema);
    let data =await Product.find({});
    console.log(data);
}

readindb();