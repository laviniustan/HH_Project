import React, { useEffect } from 'react'
import {displayListOfUsers} from '../../util/SignUpLogIn/SignUpLogIn'
import { useQuery } from "react-query";

 
const UserPage =()=>{

    useEffect(()=>{
         let users=displayListOfUsers()
        // console.log(users)
        // const response=useQuery("user",users) 
         console.log(users)
       
        
    })
    return(
        <div>


        </div>
    )
}

export default UserPage