import Axios from "axios"

import axios from 'axios'

export const deleteUser=(id)=>{
    axios.delete(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/${id}`).then(res=><div>Deleted</div>)
}

export const putUser=(id,data)=>{
    console.log(id,data)
    axios.put(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users/${id}`,data)
    .then(res=>console.log("editat"))
}

export default function editUser(){
    
}