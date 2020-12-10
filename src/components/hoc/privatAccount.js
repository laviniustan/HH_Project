import React from 'react';
// import {isLogin, isAdmin} from '../../util/SignUpLogIn/SignUpLogIn'
import{userData} from '../../util/SignUpLogIn/SignUpLogIn'
export function PrivatAccount(Component){
     class AccessComponent extends React.Component{

        render(){
            const loginErrorMessage=(
                <div>
                   ceva nu merge
                </div>
            )
                console.log(userData.isAdmin)
            return(
                <div>
                   
                    {userData.isLogin ? <Component {...this.props}/>:loginErrorMessage}
                    {/* {isLogin() === true ? <Component {...this.props}/>:loginErrorMessage} */}
                </div>
            )
        }
    }
   return AccessComponent
}

export default PrivatAccount