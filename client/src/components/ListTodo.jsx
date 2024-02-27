import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { URL } from '../../URL'

const ListTodo = () => {

  const [todo,setTodo]=useState([]);


  const deleteTodo=async(id)=>{
    try{
      const deleteTodo=await axios.delete(URL + `/todos/${id}`)

      setTodo(todo.filter(todo=>todo.todo_id !== id));
    }catch(e){
      console.log(e)
    }
  }

  const ListTodos=async()=>{
      try{
        const res=await axios.get(URL+"/todos")
        console.log(res.data);
        setTodo(res.data);
      }catch(e){
        console.log(e)
      }
  }

  useEffect(()=>{
    ListTodos();
  },[])
   
  return (
    <>
    <div className="container">         
  <table className="table table-bordered text-center mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
       {todo.map(todo=>(<tr key={todo.todo_id}>
        <td>{todo.description}</td>
        <td><button className='btn btn-success'>Edit</button></td>
        <td><button className='btn btn-danger' onClick={()=>deleteTodo(todo.todo_id)}>Delete</button></td>
      </tr>))}      
    </tbody>
  </table>
</div>
    </>
  )
}

export default ListTodo