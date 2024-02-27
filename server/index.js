const express=require("express");
const app=express();
const cors=require("cors");
// const pool=require("./db")

require("./db/conn");
app.use(express.json());


app.use(require('./router/API'));

const port=process.env.PORT;
app.listen(port,async()=>{
    try{
        console.log(`SERVER IS RUNNING ON THE PORT NUMBER ${port}`);
    }catch(e){
        console.log(e)
    }
});