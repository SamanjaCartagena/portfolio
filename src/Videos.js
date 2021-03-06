import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import useStyles from './styles';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid} from '@material-ui/core';

import CardHeader from '@material-ui/core/CardHeader';

function Videos() {
  
      const classes = useStyles();

        return (
            <>
                <Grid container direction="column">
     
     <Grid item container spacing={2}>
       <Grid item xs={0} sm={3} >
       <Card>

      <CardContent>
      <Typography>News App with React JS, JavaScript</Typography>

       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>
       <Typography><a href="">Github Repo</a></Typography>

       </CardContent>

       </Card>
       </Grid>

       <Grid item xs={0} sm={3} >
       <Card>

      <CardContent>
      <Typography>News App with React JS, JavaScript</Typography>

       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>
       <Typography><a href="">Github Repo</a></Typography>

       </CardContent>

       </Card>
       </Grid>

       <Grid item xs={0} sm={3} >
       <Card>

      <CardContent>
      <Typography>News App with React JS, JavaScript</Typography>

       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>
       <Typography><a href="">Github Repo</a></Typography>

       </CardContent>

       </Card>
       </Grid>
       <Grid item xs={0} sm={3} >
       <Card>

      <CardContent>
      <Typography>News App with React JS, JavaScript</Typography>

       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>
       <Typography><a href="">Github Repo</a></Typography>

       </CardContent>

       </Card>
       </Grid>


       </Grid>
     </Grid>
                
                
            </>
        )
    
}

export default Videos
