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
     
     <Grid item container direction="row">
       <Grid item xs={12} sm={6} md={4} lg={3} style={{}}>
         <bold><p>React JS, NYT API</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=NLEHdVzik6k"/>
       <a href="" target="_blank" className="allLinks">Codes N/A</a>

       </Grid>

       <Grid item xs={12} sm={6} md={4} lg={3} >
         <bold><p>React JS, Breaking Bad API</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=qGeateI0NsQ"/>
       <a href="https://github.com/SamanjaCartagena/breakingBad" target="_blank" className="allLinks">Codes</a>

       </Grid>

       <Grid item xs={12} sm={6} md={4} lg={3} >
         <bold><p>Chat App, React Redux Socket.io</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=p8KbhbG4FnI"/>
       <a href="" className="allLinks">Codes N/A</a>

       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}>
         <bold><p>Netflix Clone with React JS and Firebase</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=UP6kpQ5xTR8"/>
       <a href="https://github.com/SamanjaCartagena/NetflixProject" target="_blank" className="allLinks">Codes</a>

       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}>
         <bold><p>React JS, Pockmon API pokedex</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=hmFRp6e_cDY"/>
       <a href="https://github.com/SamanjaCartagena/pokemonNames" target="_blank" className="allLinks">Codes</a>

       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}>
         <bold><p>Todo App with Firebase database</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=QDaFlFIeq2o"/>
       <a href="https://github.com/SamanjaCartagena/todolist/tree/master/src" target="_blank" className="allLinks">Codes</a>

       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}>
         <bold><p>Simple Frontend with Tailwind CSS</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=98JRThInBQ8"/>
       <a href="" target="_blank" className="allLinks">Codes N/A</a>

       </Grid>
       <Grid item xs={12} sm={6} md={4} lg={3}>
         <bold><p>Expense Tracker with React JS</p></bold>
       <ReactPlayer  width="90%" url="https://www.youtube.com/watch?v=eQHFzcQSiac"/>
       <a href="" target="_blank" className="allLinks">Codes N/A</a>

       </Grid>
       </Grid>
                
               </center> 
            </>
        )
    
}

export default Videos
