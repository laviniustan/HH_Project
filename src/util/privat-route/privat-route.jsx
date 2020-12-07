import React from 'react'
import {isLogin} from  '../SignUpLogIn/SignUpLogIn'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute=({component:Component, ...rest})=>(
    <Route
        {...rest}
        render={props=>(
            isLogin()?<Component {...props}/>:<Redirect to='/login'/>
        )
        
        }
    />
)

export default PrivateRoute;