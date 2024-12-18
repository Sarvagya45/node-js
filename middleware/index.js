//middleware is used to authenticate request 
const express = require('express');
const app =express();

const reqFilter=require('./middleware');

const route=express.Router();
route.use(reqFilter);

//this is used when we have to apply middleware on every page
//app.use(reqFilter);

app.get('',((req,resp)=>{
    resp.send('welcome to home page');
}))

app.get('/user',((req,resp)=>{
    resp.send('welcome to user page');
}))

//if we have to apply middleware on a specific page then we use this method
app.get('/about',reqfilter,(req,resp)=>{
    resp.send('welcome to about page');
})

route.get('/help',(req,resp)=>{
    resp.send('welcome to help page');
})

route.get('/contact',(req,resp)=>{
    resp.send('welcome to contact page');
})

app.use('/',route);

app.listen(4900);