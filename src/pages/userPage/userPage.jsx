import React, { useEffect } from 'react'
import {displayListOfUsers} from '../../util/SignUpLogIn/SignUpLogIn'
import UsersList from '../../components/list-users/users-list'
import UserComponent from '../../components/user/userComponent'
import MyAccount from '../../components/my-account/my-account';
import { styled } from '@material-ui/core/styles';

import './userPage'

class UserPage extends React.Component{


    render(){
        return(
            <div>
                <UserComponent/>
                <div className='useComponent'>
               
                <UsersList/>
                <MyAccount/>
                </div>
                


            </div>
        )
    }

}
export default UserPage
