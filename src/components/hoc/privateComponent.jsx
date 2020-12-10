import React from 'react';

import{userData} from '../../util/SignUpLogIn/SignUpLogIn'
export function PrivateComponent(Component){
     class AccessComponent extends React.Component{

        render(){
            const loginErrorMessage=(
                <div>
                   Nu esti Admin
                </div>
            )
          
            return(
                <div>
                   
                    {userData.isAdmin==='true'? <Component {...this.props}/>:loginErrorMessage}
                    
                </div>
            )
        }
    }
   return AccessComponent
}

export default PrivateComponent