import React, {useState} from 'react'
import {useQuery} from "react-query";
import axios from 'axios'
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    makeStyles,
    Button,
    CardMedia,
    Grid,
    Modal,
    Backdrop,
    Fade
} from '@material-ui/core';
import {BorderAll} from '@material-ui/icons';
import UserComponent from '../user/userComponent';
import {userData} from '../../util/SignUpLogIn/SignUpLogIn'

const useStyles = makeStyles((theme) => ({
    root: {
        //   minWidth: 275,
        maxWidth: 500,
  
    },
    media: {
        marginLeft: 0,
        height: 10,
        maxWidth: 240,
        paddingTop: '36.25%', // 16:9
    },

    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    },
    users: {
        overflowY: 'scroll',
        height: 700,
        width: 100,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        marginLeft: 110,
        marginTop: 100
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3)
    },
    component:{
        // width:'50%'
    },
  
}));

const UsersList = () => {
    const {isLoading, error, data} = useQuery(
        'user',
        () => axios(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users`)
    )

    const [open, setOpen] = React.useState(false);
    const [stateElem, setStateElem] = useState(null)
    const [user, setUser] = useState(null)
    const classes = useStyles();

    const handleOpen = (stateElem, item) => () => {
      
        setOpen(true);
        setStateElem(stateElem)
        setUser(item)

    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.component} >

            <Grid container="container" spacing={3}>
                <Grid item="item" xs={6} className={classes.users}>
                    {
                        isLoading
                            ? <div>...loading</div>
                            : data
                                .data
                                .map(item => {
                                    return <div >
                                        <Card className={classes.root} key={item.id}>
                                            <CardContent>
                                                <Typography
                                                    className={classes.title}
                                                    color="textSecondary"
                                                    gutterBottom="gutterBottom">
                                                    {item.firstName}
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    {item.lastName}

                                                </Typography>

                                                <CardMedia className={classes.media} image={item.avatar} title="Paella dish"/>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small" onClick={handleOpen(item.id, item)} id={item.id}>Info</Button>

                                         
                                            </CardActions>

                                        </Card>
                                    </div>
                                })
                    }
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={open}
                        onClose={handleClose}
                        closeAfterTransition="closeAfterTransition"
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                            timeout: 500
                        }}>
                        <Fade in={open}>
                            <div className={classes.paper}>
                            <UserComponent user={user}/>
                             
                            </div>
                        </Fade>

                    </Modal>
                </Grid>
                <Grid item="item" xs={6}></Grid>
            </Grid>

        </div>
    )
}

export default UsersList