const mongoose= require('mongoose');
const app = require('./app');
const port = 3000;

mongoose.connect('mongodb://localhost:27017/mocoa', (err,res)=>{
    if(err){
        console.log(`El error es ${err}`);
    }else{
        app.listen(port, ()=>{
            console.log(`El puerto en uso es ${port}`);
        });
    }
});
