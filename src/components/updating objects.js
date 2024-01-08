import React, { useState } from 'react'



const Updatingobjects = (props) => {
    const{productDetails,handleClick}=props;
  return (
    <div style={{margin:'auto'}}>
          <h5>{productDetails.name}</h5> 
          <h5>{productDetails.price}</h5>
          <button onClick={handleClick}>offer price</button>

    </div>
  )
}

export default Updatingobjects
