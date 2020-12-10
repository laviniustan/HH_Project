import React, {useEffect} from 'react'

import UsersList from '../../components/list-users/users-list'
import UserComponent from '../../components/user/userComponent'
import MyAccount from '../../components/my-account/my-account';
import {makeStyles} from '@material-ui/core';
import SignUp from '../sign-up/sign-up'
import {userData} from '../../util/SignUpLogIn/SignUpLogIn'

import {Grid} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    color: {
        backgroundColor:"#e8e8e8"
    }

}))

const UserPage=()=> {
  const classes =useStyles()
    
        return (
            <div  className={classes.color} >
                <UserComponent/>

                <Grid
                    container
                    direction="row-reverse"
                    justify="space-evenly"
                    alignItems="center"
                  
                    >

                    <Grid item="item" xs={6}>
                        <UsersList/>
                    </Grid>
                    <Grid item="item" xs={6}>
                        <MyAccount/>
                    </Grid>
      
                    
                    {(userData.isAdmin==='true') ? <SignUp/> : <div>nu esti Admin</div>}

                </Grid>

            </div>
        )
    

}
export default UserPage
