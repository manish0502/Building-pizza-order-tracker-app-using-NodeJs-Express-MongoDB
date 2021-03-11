const express = require('express');
const app=express();
const ejs= require('ejs');
const expressLayouts=require('express-ejs-layouts');
const path =require('path');
const PORT = process.env.PORT || 3000;
 





// assets

app.use(express.static('public'))

// Setup Template Engine

app.use(expressLayouts);
app.set('views' ,path.join(__dirname,'/resources/views'))
app.set('view engine' , 'ejs');

// @setting up routes

app.get('/' ,(req, res)=>{
    res.render('home')

})

app.get('/cart' ,(req, res)=>{
    res.render('customers/cart')

})

app.get('/login' ,(req, res)=>{
    res.render('auth/login')

})

app.get('/reg' ,(req, res)=>{
    res.render('auth/register')

})




//Listening server
app.listen(PORT ,()=>{
    console.log(`Server is running at port no: ${PORT}`);
})