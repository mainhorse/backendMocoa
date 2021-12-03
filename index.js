const mongoose= require('mongoose');
const app = require('./app');
const port = 3000;
// const conexionLocal = 'mongodb://localhost:27017/tiquetfast';
//const conexionNube ='mongo "mongodb+srv://cluster0.uyltm.mongodb.net/myFirstDatabase" --username tiquetFast';
//const uri = "mongodb+srv://my_login_id:TFDBaz9KdWJtBqA@cluster0.uyltm.mongodb.net/tiquetFast?retryWrites=true&w=majority";
//const uri = 'mongodb+srv://tiquetfast:<TFDBaz9KdWJtBqA>@cluster0.uyltm.mongodb.net/test';
//mongodb+srv://tiquetFast:<TFDBaz9KdWJtBqA>@cluster0.uyltm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const uri = 'mongodb+srv://tiquetFast:0000@cluster0.uyltm.mongodb.net/test';

mongoose.connect(uri, (err,res)=>{
    if(err){
        console.log(`El error es ${err}`);
    }else{
        app.listen(port, ()=>{
            console.log(`El puerto en uso es ${port}`);
        });
    }
});
