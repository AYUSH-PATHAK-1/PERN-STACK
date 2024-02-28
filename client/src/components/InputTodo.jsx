import React ,{Fragment, useState}from 'react'
import {URL} from '../../URL'
import axios from 'axios';

const InputTodo = () => {

    const [description,setDescription]=useState("");

    const onSubmitForm=async(e)=>{
        e.preventDefault();
        try{
            if(!description){
                console.log("Please Fill the Field");
            }else{
                const res=await axios.post(URL +"/todos",{description:description},{withCredentials:true});
                console.log("Data Added Successfull")
                setDescription("");
                window.location="/"
            }
        }catch(e){
            console.log(e)
        }
    }

  return (
    <>
    <Fragment>
        <div className='p-12'>
    <h1 className='text-center mt-5 mb-10 fs-4 font-bold'>PERN TODO LIST</h1>
    <form className='d-flex justify-center items-center flex' onSubmit={onSubmitForm}>
        <div className='w-[50%]  '>
        <input type="text" className='form-control' value={description} onChange={(e)=>setDescription(e.target.value)} />
        </div>
        <button className='btn btn-success ml-2'>Add</button>
    </form>
    </div>
    </Fragment>
    </>
  )
}

export default InputTodo