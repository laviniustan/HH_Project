
import { useEffect, useState } from 'react';
import axios from 'axios';

export const userData={
    userLog: {},
    isLogin:false, 
    isAdmin: false
    
}


export const signUp=(data)=>{
    
    console.log(data)
    axios.post(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users`,data)
    .then(res=>console.log("send")).catch(error=>console.log(error))
}



export const useLogInAuthentication=(data,user)=>{
     console.log(data)
    const[login,setLogin]=useState(false)
    const[admin,setAdmin]=useState(false)
    console.log(user.email)
    useEffect(()=>{
        if(data){
        data.data.map(e=>{
            
            if(e.email===user.email && e.password===user.password) {
            //  setAdmin(true)
             setLogin(true)
             localStorage.setItem("login",login)
            
             localStorage.setItem("user",JSON.stringify({email:e.email,
                                                        password:e.password,
                                                        fname:e.firstName,
                                                        lname:e.lastName,
                                                        avatar:e.avatar,
                                                        id:e.id}))

                setAdmin(e.isAdmin)
        
                localStorage.setItem("admin",admin)
               
            


            }
            
         })
      
     
        }

    })

 

    return{login,admin,user}
    
};


    userData.userLog=localStorage.getItem("user")
    userData.isLogin=localStorage.getItem("login")
    userData.isAdmin=localStorage.getItem("admin") 
    




export const logOut=()=>{
    localStorage.removeItem("user")
    localStorage.removeItem("login")
    localStorage.removeItem("admin")
    userData.userLog= {}
    userData.isLogin=false
    userData.isAdmin= false
    window.location.reload(false);

} 
