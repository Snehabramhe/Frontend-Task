
import React from 'react'
import userContext from './userContext'
import { useContext } from 'react'
import Button from '@mui/material/Button'
const UserDetails = () => {
 
 const {updateName}= useContext(userContext)
    
  return (
    <div>
      <Button onClick={()=>updateName('Sneha Bramhe')}>updatename</Button>
    </div>
  )
}

export default UserDetails
