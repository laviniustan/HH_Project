import React, { useEffect } from 'react'
import {displayListOfUsers} from '../../util/SignUpLogIn/SignUpLogIn'
import UsersList from '../../components/list-users/users-list'


class UserPage extends React.Component{

    componentDidMount(){

    }
    render(){
        return(
            <div>
                <UsersList/>
            </div>
        )
    }

}
export default UserPage
