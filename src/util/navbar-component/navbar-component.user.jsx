import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItemText from "@material-ui/core/ListItemText";
import {useHistory} from 'react-router-dom'
import {userData} from '../SignUpLogIn/SignUpLogIn'
import MyAccount from '../../components/my-account/my-account'

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
   
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const NavbarCompUser=()=>{
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [navBarInfo, setnavBarInfo]=React.useState(null);
  const history=useHistory()
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
   
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const afis=(e)=>{
  
   const elem=e.currentTarget.id
    if(elem==='info'){
        setnavBarInfo(elem)
        // <Render path='/info' component={MyAccount}> </Render>
        history.push('/user/info')
    }
  }
  
  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
       {JSON.parse(userData.userLog).fname}
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
       
      >
        <StyledMenuItem>
           
          <ListItemText  onClick={afis} primary="See my user" id='info'/>
        </StyledMenuItem>
        {/* {
            userData.isAdmin==='false'?null:     <StyledMenuItem>

            <ListItemText onClick={afis} primary="Add user" id='add'/>
            </StyledMenuItem>
        }
   */}
      </StyledMenu>
    </div>
  );
}
export default NavbarCompUser
