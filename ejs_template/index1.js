const express = require('express');
const path=require('path');

const app =express();
const publicPath=path.join(__dirname,'public');

app.set('view engine','ejs');

//to remove extension we use this method
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
})

app.get('/profile',(req,resp)=>{
    const user={
        name:'Saravgya',
        email:'gsarvagya@gmail.com',
        city:'ghaziabad',
        skills:['Html','css','java','c','c++']
    }
    resp.render('profile',{user});
})

app.get('/login',(req,resp)=>{
    resp.render('login');
})

app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
})
app.get('/help',(req,resp)=>{
    resp.sendFile(`${publicPath}/help.html`);
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicPath}/404.html`);
})

app.listen(4800);