import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    makeStyles
} from '@material-ui/core';
import React, {useState} from 'react'
import NavbarCompUser from '../../util/navbar-component/navbar-component.user'

import {Link, Redirect, useHistory} from 'react-router-dom'
import {userData, logOut} from '../../util/SignUpLogIn/SignUpLogIn'
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        overflowX:"hidden"
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        cursor:"pointer"
    },
    link: {
        color: "white",
        fontSize: 20
    },
    user:{
      display:'flex'
    }
}));

const NavBar = () => {

    const classes = useStyles()
    const history = useHistory()
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>

                    <Link to="/" className={classes.link}>HH</Link>
                    <Typography edge="start" variant="h6" className={classes.title} onClick={()=>history.push('/user')} >  {userData.isLogin==='true'?'home':''}</Typography>

                    {
                        userData.isLogin
                            ? (
                                <div className={classes.user}>
                                    <Button
                                        color="inherit"
                                        onClick={() => {
                                            logOut();
                                            <Redirect to='/'/>
                                        }}>Log out</Button>
                                        <NavbarCompUser/>
                                    {/* <Button color="inherit">{
                                            JSON
                                                .parse(userData.userLog)
                                                .fname
                                        }</Button> */}
                                </div>
                            )
                            : (<Link to="/login" className={classes.link}>Log In</Link>)
                    }
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar