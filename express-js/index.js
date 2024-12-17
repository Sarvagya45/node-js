const express = require('express');
const app =express();

app.get('',(req,resp)=>{
    console.log("Data sent by browser->> ",req.query.name);
    resp.send(`
        <h1>Welcome,${req.query.name} This is home page</h1>
        <a href="/about">Go to about page</a>
        <br> </br>
        <a href="/help">Go to help page</a>
        `);
})

app.get('/about',(req,resp)=>{
    resp.send(`
        <h1>This is about page </h1>
        <input type="text" placeholder="User name" />
        <button>Click Me</button>
        <a href="/">Go to Home page</a>
        <br> </br>
        <a href="/help">Go to help page</a>
    `);
})

app.get('/help',(req,resp)=>{
    resp.send([{
        name:'Sarvagya',
        email:'sarvagya@gmail.com'
    },
    {
        name:'Shubh',
        email:'Shubh@gmail.com'
    }]);
})

app.listen(4300);