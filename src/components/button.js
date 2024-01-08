import React, { useState } from 'react';

function BootstrapButton(props) {

    const[alert , setAlert]=useState(false)

   const HandleClick=()=>{
        
        setAlert(!alert)
        console.log("Its working")
    }

    // const HandleClose=()=>{
        
    //     setAlert(false)
    //     console.log("Its working")
    // }

    return (
        <div style={{margin:'auto'}}>
            <button onClick={HandleClick} type="button" class="btn btn-primary">Primary</button>
            {/* {alert?<p>You clicked me <button onClick={HandleClose}>Close</button> </p>:null} */}
            {alert?<p>hello</p>:()=>setAlert(false)}
        </div>
    );
}

export default BootstrapButton;