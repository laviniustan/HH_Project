import { Avatar, Container, CssBaseline, Typography,Grid, TextField,Button, withStyles, withTheme  } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import React from 'react';
import { Link } from 'react-router-dom';
import {signUp} from '../../util/SignUpLogIn/SignUpLogIn'

const useStyle=theme=>({
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

class SignUp extends React.Component{
    constructor(props){
        super()
        this.state={
            firstName:'',
            lastName:'',
            email:'',
            password:'',
            isAdmin:false

        }
        this.onChange = this.onChange.bind(this)
    }

    onChange(e){
        console.log(e.target.name)
        this.setState({[e.target.name]:e.target.value})
    }
    
    onSublict(e){
        e.preventDefault()
            let data={
                firstName:this.state.firstName,
                lastname:this.state.lastName,
                email:this.state.email,
                password:this.state.password
            }
            signUp(data)
    }

    render(){
 
        const {classes}=this.props
        console.log(this.state)
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <div className={classes.paper}>
                    <Avatar>
                        <LockIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>

                    <form noValidate className={classes.form}>
                        <Grid container spacing={2} >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoCapitalize ="firstName"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="firstName"
                                    variant="outlined"
                                    autoFocus
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoCapitalize ="lastName"
                                    name="lastName"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="lastName"
                                    variant="outlined"
                                    autoFocus
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.onChange}
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
                                    onChange={this.onChange}
                                />
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                color="primary"
                                variant="contained"
                                className={classes.submit}
                            >Sign up</Button>
                        </Grid>
                        <Grid container justify="flex-end"> 
                              <Grid item>
                                    <Link to="/login"> Already have an acount? Sign In</Link>
                              </Grid>   
                        </Grid>

                    </form>

                </div>
            </Container>
      
        )
    }
}
export default withStyles(useStyle,{withTheme:true})(SignUp)