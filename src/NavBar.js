import * as React from 'react';
import AppBar from '@mui/material/AppBar';
 import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import ShowUserData from './ShowUserData'
import { Route,Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';



export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{background:'black'}} >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{color:'white'}}>
            CHAMPION
          </Typography>
          <Link to="/ButtonAppBar/userdata" style={{color:'white',textDecoration:'none'}} >
            GETUSER
          </Link>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route element={<ShowUserData/>} path="/userdata" />
      </Routes>
  
    </Box>
  );
}