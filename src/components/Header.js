import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/icons-material/Menu'
import Grid from '@mui/material/Grid'
import '../components/style.css'



const Header = (props) => {
    return (
        <div className='header'>
        <h1>{props.title}</h1>
        </div>
    );
};

export default Header;