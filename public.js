const express = require('express');
const path=require('path');

const app =express();
const publicPath=path.join(__dirname,'public');

//app.use(express.static(publicPath));

//to remove extension we use this method
app.get('',(req,resp)=>{
    resp.sendFile(`${publicPath}/index.html`);
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

app.listen(4100);