import {Button,  Input, makeStyles} from '@material-ui/core';
import {render} from '@testing-library/react';
import React, {useState,useRef, useEffect} from 'react';
import PrivateComponent from '../hoc/privateComponent'
import {deleteUser} from '../../util/user-interaction/user-interaction'

import {putUser} from '../../util/user-interaction/user-interaction'
import{signUp} from '../../util/SignUpLogIn/SignUpLogIn'
import {userData} from '../../util/SignUpLogIn/SignUpLogIn'
import SignUp from '../../pages/sign-up/sign-up'
import PrivatAccount from '../hoc/privatAccount';

const useStyle=makeStyles(theme=>({
    userEdit:{
        display: 'grid',
        padding:'15px'
    }
}))

const UserComponent = ({user}) => {   
  
    
    const [edit, setEdit]=useState({firstName:'',lastName:'',email:'',password:'',isAdmin:''})
    const [canEdit, setCanEdit]=useState(false)
    const [isDesabled, setisDesabled]=useState(false)
    const delUser = (e) => {
        console.log(user.id)
        console.log("====")
        deleteUser(user.id)
        setisDesabled(true) 
         setTimeout(function(){ window.location.reload(false); }, 1000);
        
    }
    const editUser=()=>{
        setCanEdit(!canEdit)
        setEdit(user)
    }
    const changeInputVal=(e)=>{
        setEdit({...edit, [e.target.name]: e.target.value })
    }
    const saveEdit=()=>{
   
        let id=user.id
     
          putUser(id,edit)
          setisDesabled(true) 
          setTimeout(function(){ window.location.reload(false) ; }, 1000);
         

    }
    const classes=useStyle()
  
    return (
       
        <div>
          

         { user?  <div>
                 <img src={user.avatar} ></img>
               
               { canEdit===true? <div className={classes.userEdit}>
                <Input value={edit.firstName} onChange={changeInputVal} name='firstName' />
                <Input value={edit.lastName} onChange={changeInputVal} name='lastName'  />
                <Input value={edit.email} onChange={changeInputVal} name='email'  />
                <Input value={edit.password} onChange={changeInputVal} name='password' />
                <Input value={edit.isAdmin} onChange={changeInputVal} name='isAdmin'  />
                <Button onClick={saveEdit}  disabled={isDesabled} >Save</Button>
                </div>:<div>
                <h3>{user.firstName}</h3>
                <h4>{user.lastName}</h4>
                <h4>{user.email}</h4> 
                <h4>{user.password}</h4>
                <h4>{user.isAdmin}</h4>
                </div>
                
            }
                
            <div>
                <Button onClick={delUser} disabled={isDesabled} >delet</Button>
                <Button onClick={editUser} >edit</Button>
            </div>
            </div>:null}
       
            
        </div>
    )
}

export default PrivateComponent(UserComponent);