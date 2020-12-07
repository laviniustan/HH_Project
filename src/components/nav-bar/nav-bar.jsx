import { AppBar,Toolbar,IconButton,Typography,Button,makeStyles } from '@material-ui/core';
import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu';
import {Link} from 'react-router-dom'
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
    const[logUser,setlogUser]=useState(false)
    const classes=useStyles()

    return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton> */}
              <Link to="/" className={classes.link}>HH</Link> 
              <Typography edge="start" variant="h6" className={classes.title}>
                
              </Typography>
              {logUser? (<div><Button color="inherit" >Log In</Button> <Button color="inherit">user</Button></div>):(<Link to="/login" className={classes.link}>Log In</Link>)}
            </Toolbar>
          </AppBar>
        </div>
      );
}

export default NavBar