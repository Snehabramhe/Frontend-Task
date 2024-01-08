import React, { useState } from 'react'

const ArrayofObjects = () => {

    const [cricketPlayers,setCricketplayers] =useState([
        {
          name: "Sachin Tendulkar",
          country: "India",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm medium",
          age: 48
        },
        {
          name: "Virat Kohli",
          country: "India",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm medium",
          age: 33
        },
        {
          name: "AB de Villiers",
          country: "South Africa",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm medium",
          age: 38
        },
        {
          name: "Steve Smith",
          country: "Australia",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm leg spin",
          age: 32
        },
        {
          name: "Kane Williamson",
          country: "New Zealand",
          battingStyle: "Right-handed",
          bowlingStyle: "Right-arm off spin",
          age: 31
        }
      ]);
      

const handleClick=()=>{
    setCricketplayers(cricketPlayers.map((player)=>player.name==='Sachin Tendulkar'?{...cricketPlayers,name:'Dhoni'}:player))
}
  return (
    <div>
          <ul>
               <button>Show players</button>
               <li>{cricketPlayers.map((player)=><p onClick={handleClick}>{player.name}</p>)}</li>
          </ul>
    </div>
  )
}

export default ArrayofObjects
