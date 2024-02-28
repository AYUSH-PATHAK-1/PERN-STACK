import axios from 'axios';
import React, { useState } from 'react'
import { URL } from '../../URL';

const EditTodo = ({todo}) => {

  const [description,setDescription]=useState(todo.description);

const updateDes=async(e)=>{
  e.preventDefault();
try{
  const res=await axios.put(URL+`/todos/${todo.todo_id}`,{description:description},{withCredentials:true})
  console.log("succsess");
  window.location="/";
}catch(e){
  console.log(e)
}
}

  return (
    <>
    <button type="button" className="btn btn-warning " data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>
  Edit 
</button>


<div className="modal " id={`id${todo.todo_id}`}  onClick={()=>setDescription(todo.description)}>
  <div className="modal-dialog">
    <div className="modal-content text-black">

     
      <div className="modal-header">
        <h4 className="modal-title text-black font-bold text-xl">Edit ToDo</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}></button>
      </div>

      <div className="modal-body">
       <h3 classNameName='text-black'>Edit</h3> 
       <input type="text" className='form-control mt-3' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </div>


      <div className="modal-footer">
        <button type="button" className="btn btn-warning text-black " data-bs-dismiss="modal" onClick={(e)=>updateDes(e)}>Edit</button>
        <button type="button" className="btn btn-danger text-black " data-bs-dismiss="modal" onClick={()=>setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
    </>
  )
}

export default EditTodo