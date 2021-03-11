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

require('./routes/web')(app);





//Listening server
app.listen(PORT ,()=>{
    console.log(`Server is running at port no: ${PORT}`);
})