import React, { Component } from 'react'
import ReactPlayer from 'react-player';
import useStyles from './styles';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton, Grid} from '@material-ui/core';

import CardHeader from '@material-ui/core/CardHeader';

function Videos() {
  
      const classes = useStyles();

        return (
            <>
            <center>
     
     <Grid item container spacing={2}>
       <Grid item xs={12} sm={6} md={3}>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>

       </Grid>

       <Grid item xs={12} sm={6} md={3} >
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>

       </Grid>

       <Grid item xs={12} sm={6} md={3} >
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>

       </Grid>
       <Grid item xs={12} sm={6} md={3}>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>

       </Grid>


       </Grid>
                
               </center> 
            </>
        )
    
}

export default Videos
