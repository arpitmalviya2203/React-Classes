import React from 'react'
import {useForm} from "react-hook-form"

function Info_form() {
    const{register, handleSubmit, watch, formState: {error},} = useForm();

    fun(){f
        

    };

  return (
    <form onSubmit = {handleSubmit(fun)}>
        <div>
            <label>First Name: </label>
            <input {...register("firstName")}/>
            <br></br>
            <br></br>
        </div>
        <div>
            <label>Middle Name: </label>
            <input {...register("middleName")}/>
            <br></br>
            <br></br>
        </div>
        <div>
            <label>Last Name: </label>
            <input {...register("lastName")}/>
            <br></br>
            <br></br>
        </div>
         <div>
            <input type="submit"/>
            <br></br>
            <br></br>
        </div>
        
    </form>
  )
}

export default Info_form;