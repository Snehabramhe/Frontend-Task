import React, { useState } from 'react'
import Users from './users'
import userContext from './userContext'
const UserDashboard = () => {
   const[user,updateUser]=useState('Sneha');
    
     const users={
        username:user,
        updateName:updateUser
     }
   

  return (
    <div>
      <userContext.Provider value={users}>
       <h1>This is a userDashboard</h1>
       <h4> userName is {users.username}</h4>
         <Users/>
         </userContext.Provider>
    </div>
  )
}

export default UserDashboard
