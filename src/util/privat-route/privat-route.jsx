import React from 'react';
import {userData} from  '../SignUpLogIn/SignUpLogIn';
import { Redirect, Route } from 'react-router-dom';

// console.log("privat",userData.isLogin)
const PrivateRoute=({component:Component, ...rest})=>(
    <Route
        {...rest}
        render={(props)=>(
            
            userData.isLogin? <Component {...props} /> : <Redirect to='/login' />
        
            
           
        )
        
        }
    />
)

export default PrivateRoute;