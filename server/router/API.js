const pool=require("../db/conn")
const express=require("express");
const router=express.Router();

router.post("/todos",async(req,res)=>{
    try{
        const {description} =req.body;
        const newtodo=await pool.query("INSERT INTO todo (description) VALUES($1)",[description]);
        res.json(newtodo.rows[0]);
    }catch(e){
        console.log(e)
    }
})

router.get("/todos",async(req,res)=>{
    try{
        const alltodos=await pool.query("SELECT * FROM todo")
        res.json(alltodos.rows)
    }catch(e){
        console.log(e)
    }
})

router.get("/todos/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const todo=await pool.query("SELECT * FROM todo WHERE todo_id=$1",[id])
        res.json(todo.rows[0])
    }catch(e){
        console.log(e)
    }
})

router.put("/todos/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const {description}=req.body;
        const todo=await pool.query("UPDATE todo SET description=$1 WHERE todo_id=$2",[description,id])
        res.json(todo.rows[0])
    }catch(e){
        console.log(e)
    }
})

router.delete("/todos/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        // const {description}=req.body;
        const todo=await pool.query("DELETE FROM todo WHERE todo_id=$1",[id])
        res.json("todo was deleted !")
    }catch(e){
        console.log(e)
    }
})

module.exports=router;