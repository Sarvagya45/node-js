const express = require('express');
require("./config");
const Product = require("./product");

const app = express();
//it is used to convert request data into json form
app.use(express.json());

app.get("/search/:key",async(req,resp)=>{
    let data= await Product.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}}
        ]
    })
    resp.send(data);
    console.log(data);
})

app.listen(5000);