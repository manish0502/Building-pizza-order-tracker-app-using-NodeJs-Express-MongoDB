require('dotenv').config();
const express = require('express');
const app=express();
const ejs= require('ejs');
const expressLayouts=require('express-ejs-layouts');
const path =require('path');
const PORT = process.env.PORT || 3000;
const mongoose =require('mongoose');
const session = require('express-session'); 
const flash = require('express-flash');
const MongoDbStore = require('connect-mongo')(session)

/*********************** Connecting To MongoDB ************************************/



mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useCreateIndex:true, useUnifiedTopology: true, useFindAndModify : true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log('Database connected...');
}).catch(err => {
    console.log('Connection failed...')
});

/*********************** Session Store********************************/

let mongoStore = new MongoDbStore({
    mongooseConnection: connection,
    collection: 'sessions'
})


/*********************** Configration for Sessions ********************************/

app.use(session({

    secret:process.env.COOKIE_SECRET,
    resave: false,
    store: mongoStore,
    saveUninitialized:false,
    cookie:{ maxAge: 1000 * 60 * 60 * 24 }


}))

/*********************** Using Flash as middleware ********************************/

app.use(flash());


/*********************** Setting up Assets ********************************/

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

/*********************** Setup Global Middleware ********************************/

app.use((req, res, next)=>{
    res.locals.session = req.session;
    next();
})


/*********************** Setup Template Engine ********************************/


app.use(expressLayouts);
app.set('views' ,path.join(__dirname,'/resources/views'))
app.set('view engine' , 'ejs');


/*********************** Setup Routes ********************************/


require('./routes/web')(app);



/*********************** Listening Server ********************************/


app.listen(PORT ,()=>{
    console.log(`Server is running at port no: ${PORT}`);
})