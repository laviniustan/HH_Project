import axios from 'axios'
import { useQuery } from "react-query";


export const signUp=(data)=>{
    
    console.log(data)
    axios.post(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/$`,data)
    .then()
}
export const LogIn=(data)=>{
    let isLog=false
    console.log(data)
    axios.post(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/${data}`,data)
    .then(()=>isLog=true)
}
export const displayListOfUsers=async()=>{
    let data={}
     await axios.get(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users`)
        .then(res=>data=res.data)

       return data
    }
   
