import React from 'react';
// import {isLogin, isAdmin} from '../../util/SignUpLogIn/SignUpLogIn'
import{userData} from '../../util/SignUpLogIn/SignUpLogIn'
export function PrivateComponent(Component){
     class AccessComponent extends React.Component{

        render(){
            const loginErrorMessage=(
                <div>
                   Nu esti Admin
                </div>
            )
                console.log(userData.isAdmin)
            return(
                <div>
                   
                    {userData.isAdmin? <Component {...this.props}/>:loginErrorMessage}
                    {/* {isLogin() === true ? <Component {...this.props}/>:loginErrorMessage} */}
                </div>
            )
        }
    }
   return AccessComponent
}

export default PrivateComponent