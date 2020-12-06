import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import LockIcon from '@material-ui/icons/Lock';
import { Avatar, Container, CssBaseline, Typography,Grid, TextField,Button, makeStyles} from '@material-ui/core';
import {LoginQuery} from '../../util/SignUpLogIn/SignUpLogIn'

const useStyles= makeStyles(theme=>({
    paper:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    avatar:{
        margin:theme.spacing(1),
         backgroundColor:theme.palette.secondary.main,
    },
    form:{
        width:'100%',
        marginTop:theme.spacing(3)
    },
    submit:{
        margin:theme.spacing(3,0,2)
    }
})
);
const LogIn=()=>{

    const classes=useStyles()
    const [user, setUser]=useState({email:'',password:''})
    
    const onChange=(e)=>{
        setUser({...user, [e.target.name]: e.target.value })
    }

    const onSubmite=(e)=>{
        e.preventDefault()
        //  LoginQuery(1)
    }
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Log In
                    </Typography>
                    {console.log(user)}
                    <form noValidate className={classes.form}>
                        <Grid container spacing={2} >
                           
                            
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                     onChange={onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="password"
                                    label="password"
                                    name="password"
                                    autoComplete="current-password"
                                     onChange={onChange}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                className={classes.submit}
                                onClick={onSubmite}
                            >Log In</Button>
                        </Grid>
                        <Grid container justify="flex-end"> 
                              <Grid item>
                                    <Link to="/signUp"> Don't have an acount? Sign Up</Link>
                              </Grid>   
                        </Grid>

                    </form>

                </div>
            </Container>
      
        )
    
}
export default LogIn