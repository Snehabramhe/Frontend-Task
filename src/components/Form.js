import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { style } from "@mui/system";

const Form = (props) => {
 
  const nameRef=useRef(null)
  const ageRef=useRef(null)
  
const person={name:'',age:0}
  // const Mymovie = () => {
  //   Setmovies("virat", "dhoni ", "pant");
  // };


  const HandleSubmit=(event)=>{
      event.preventDefault()
      if(nameRef.current!==null)
      person.name=nameRef.current.value
      if(ageRef.current!==null)
      person.age =parseInt(ageRef.current.value)
      console.log(person)
  }

  return (
    <div>
       <form onSubmit={HandleSubmit}>
        <label htmlFor="name">Name</label>
         <input ref={nameRef} type="name"/>
         <label htmlFor="Age">Age</label>
         <input ref={ageRef} type="number"/>
         <button type="submit">Submit</button>
         
       </form>
     
    </div>
  );
};

export default Form;
