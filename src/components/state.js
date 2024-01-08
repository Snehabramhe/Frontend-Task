import React, { useState } from 'react';

function State(props) {

const [Teams,Setteams]=useState(['Ind','Pak','Aus','Eng'])
//const names=['Ind','Pak','Aus','Eng']

const handleClick=()=>{
    Setteams([...Teams,'Nz','Ban'])
   // Setteams(Teams.filter((team)=>team!=='Ban'))
   
}

const handleClick2=()=>{
    //([...Teams,'Nz','Ban'])
   Setteams(Teams.filter((team)=>team!=='Ban'))
   
}

    return (
        <div>
            <button onClick={handleClick}>add team</button>
             <ul>{Teams.map((item)=><li>{item}</li>)}</ul>
             <button onClick={handleClick2}>remove</button>
        </div>
    );
}

export default State;