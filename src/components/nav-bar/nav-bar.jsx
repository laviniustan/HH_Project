import { AppBar,Toolbar,IconButton,Typography,Button,makeStyles } from '@material-ui/core';
import React, { useState } from 'react'

import {Link, Redirect, useHistory} from 'react-router-dom'
import {userData,logOut} from '../../util/SignUpLogIn/SignUpLogIn'
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link:{
        color:"white",
        fontSize:20
    }
  }));
  
const NavBar=()=>{

    const classes=useStyles()
    const history=useHistory()
    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>

              <Link to="/" className={classes.link}>HH</Link> 
              <Typography edge="start" variant="h6" className={classes.title}>
                
              </Typography>
              
              {userData.isLogin? (<div><Button color="inherit" onClick={()=>{logOut(); <Redirect to='/'/>}} >Log out</Button> <Button color="inherit">{JSON.parse(userData.userLog).fname}</Button></div>):(<Link to="/login" className={classes.link}>Log In</Link>)}
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default NavBar