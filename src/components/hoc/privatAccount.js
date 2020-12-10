import React from 'react';

import {userData} from '../../util/SignUpLogIn/SignUpLogIn'
export function PrivatAccount(Component) {
    class AccessComponent extends React.Component {

        render() {
            const loginErrorMessage = (
                <div>
                    ceva nu merge
                </div>
            )

            return (
                <div>

                    {
                        userData.isLogin
                            ? <Component {...this.props}/>
                            : loginErrorMessage
                    }

                </div>
            )
        }
    }
    return AccessComponent
}

export default PrivatAccount