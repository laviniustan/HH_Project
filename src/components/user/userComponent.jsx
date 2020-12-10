import {Button,  Input, makeStyles} from '@material-ui/core';
import {render} from '@testing-library/react';
import React, {useState,useRef, useEffect} from 'react';
import PrivateComponent from '../hoc/privateComponent'
import {deleteUser} from '../../util/user-interaction/user-interaction'

import {putUser} from '../../util/user-interaction/user-interaction'
import{signUp} from '../../util/SignUpLogIn/SignUpLogIn'

const useStyle=makeStyles(theme=>({
    userEdit:{
        display: 'grid',
        padding:'15px'
    }
}))

const UserComponent = ({user}) => {   
  
    
    const [edit, setEdit]=useState({firstName:'',lastName:'',email:'',password:'',isAdmin:''})
    const [canEdit, setCanEdit]=useState(false)
    const delUser = (e) => {
        console.log(user.id)
        console.log("====")
        deleteUser(user.id)
        
    }
    const editUser=()=>{
        setCanEdit(!canEdit)
        setEdit(user)
    }
    const changeInputVal=(e)=>{
        setEdit({...edit, [e.target.name]: e.target.value })
    }
    const saveEdit=()=>{
        console.log(user.id)
        let id=user.id
        // console.log(edit)
          putUser(id,edit)
    }
    const classes=useStyle()
    // firstName:inputFn.current.value,lastName:inputLn.current.value,email:inputEml.current.value}
    return (
       
        <div>
            {console.log(user)}

         { user?  <div>
                 <img src={user.avatar} ></img>
               
               { canEdit===true? <div className={classes.userEdit}>
                <Input value={edit.firstName} onChange={changeInputVal} name='firstName' />
                <Input value={edit.lastName} onChange={changeInputVal} name='lastName'  />
                <Input value={edit.email} onChange={changeInputVal} name='email'  />
                <Input value={edit.password} onChange={changeInputVal} name='password' />
                <Input value={edit.isAdmin} onChange={changeInputVal} name='isAdmin'  />
                <Button onClick={saveEdit} >Save</Button>
                </div>:<div>
                <h3>{user.firstName}</h3>
                <h4>{user.lastName}</h4>
                <h4>{user.email}</h4> 
                <h4>{user.password}</h4>
                <h4>{user.isAdmin}</h4>
                </div>
                
            }
                
            <div>
                <Button onClick={delUser}>delet</Button>
                <Button onClick={editUser} >edit</Button>
            </div>
            </div>:null}
            
        </div>
    )
}

export default PrivateComponent(UserComponent);