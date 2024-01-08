import { Typography,TextField,Grid } from '@mui/material'
import React from 'react'
import {useState} from 'react'
import '../MovieLand.js/style.css'
const Header = (props) => {
console.log(props.searchMovie)
  return (
    <div>
    <Grid container spacing={1} mt={4} direction={'column'} alignItems={'center'} justifyContent={'center'} >
    <Grid item xs={12}>
    <Typography variant='h5' color={'#283C64'} fontFamily={'serif'} fontSize={50}>MovieLand</Typography>
    </Grid>
       <Grid item>
         <input  onChange={props.handleChange}  placeholder='Find something great' className='searchBar' type='text' />
       </Grid>
    </Grid>

    </div>
  )
}
export default Header
