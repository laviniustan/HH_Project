
import React,{useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import {userData} from '../../util/SignUpLogIn/SignUpLogIn';
import { Input,Button} from '@material-ui/core/';
import {deleteUser} from '../../util/user-interaction/user-interaction'

import {putUser} from '../../util/user-interaction/user-interaction'
const user=JSON.parse(userData.userLog)
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    marginLeft: "330px",
   
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  userEdit:{
    display: 'grid',
    padding:'15px'
}
}));

export default function MyAccount() {
console.log(user)
     
    const [edit, setEdit]=useState({firstName:user.fname,
                                    lastName:user.lname,
                                    email:user.email,
                                    password:user.password,
                                    isAdmin:userData.isAdmin})

    const [canEdit, setCanEdit]=useState(false)
    const [isDesabled, setisDesabled]=useState(false)

    const editUser=()=>{
        setCanEdit(!canEdit)
       
    }
    const changeInputVal=(e)=>{
        setEdit({...edit, [e.target.name]: e.target.value })
    }
    const saveEdit=()=>{
        console.log(user.id)
        let id=user.id
         console.log(edit)
          putUser(id,edit)
          setisDesabled(true)
          setTimeout(function(){ window.location.reload(false) ; }, 1000);
    }



    console.log(JSON.parse(userData.userLog))
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {     
                user.fname.slice(0,1)
            }
          </Avatar>
        }

        
        title={user.fname}
        subheader={user.lname}
      />
      <CardMedia
        className={classes.media}
        image={JSON.parse(userData.userLog).avatar}
        title="Paella dish"
      />
      <CardContent>

      </CardContent>
      <CardActions disableSpacing>
  
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>
                    My+Profyle
                    </Typography>
            { user?  <div>
               
               { canEdit===true? <div className={classes.userEdit}>
                <Input value={edit.fname} onChange={changeInputVal} name='firstName' />
                <Input value={edit.lname} onChange={changeInputVal} name='lastName'  />
                <Input value={edit.email} onChange={changeInputVal} name='email'  />
                <Input value={edit.password} onChange={changeInputVal} name='password' />
                <Input value={edit.isAdmin} onChange={changeInputVal} name='isAdmin'  />
                <Button onClick={saveEdit} disabled={isDesabled} >Save</Button>
                </div>:<div>
                <Typography paragraph>Method:</Typography>

                    <Typography>
                    First_Name: {JSON.parse(userData.userLog).fname}
                    </Typography>
                    <Typography>
                    Last_Name: {JSON.parse(userData.userLog).lname}
                    </Typography>
                    <Typography>
                    Email: {JSON.parse(userData.userLog).email}
                    </Typography>
                    <Typography>
                    PASSWORD: {JSON.parse(userData.userLog).password}
                    </Typography>
                    <Typography>
                    isAdmin: {userData.isAdmin}
                    </Typography>
                   
                    </div>
                
            }
                
            <div>
           
                <Button onClick={editUser}  >edit</Button>
            </div>
            </div>:null}
        </CardContent>
            
  
      </Collapse>
    </Card>
  );
}
