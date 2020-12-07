import React from 'react'
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
    Grid
} from '@material-ui/core';
import { BorderAll } from '@material-ui/icons';

const useStyles = makeStyles({
    root: {
        //   minWidth: 275,
        maxWidth: 500
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
    users:{
        overflowY:'scroll',
        height:700,
        width:100,
        display:'grid',
        gridTemplateColumns: '1fr 1fr',
        marginLeft:150,
        marginTop:100   
    }
});

const UsersList = () => {
    const {isLoading, error, data} = useQuery(
        'user',
        () => axios(`https://5f7abe8f4ebc4100161cb093.mockapi.io/api/v1/users`)
    )


    const classes = useStyles();

    return (
        <div >
       
            <Grid container="container" spacing={3}>
                <Grid item="item" xs={6} className={classes.users}>
                    {
                        isLoading?<div>...loading</div>:
                        data.data.map(item => {
                                return <div >
                                    <Card className={classes.root}>
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
                                            <Button size="small">Info</Button>
                                        </CardActions>
                                    </Card>
                                </div>
                            })
                    }
                </Grid>
                <Grid item="item" xs={6}></Grid>
            </Grid>

           

        </div>
    )
}

export default UsersList