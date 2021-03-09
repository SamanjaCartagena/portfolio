
import './App.css';
import axios from 'axios';

import React, { Component} from 'react'
import SamanjaLogo from './SamanjaLogo';
import MovieReviews from './MovieReviews';
import Introduction from './Introduction';
import BookReviews from './BookReviews';
import ReactPlayer from 'react-player';
import breakingBad from './img/breakingBad.gif'
import Spinner from'./img/Spinner';
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Switch, Grid, Paper, Typography, Button} from '@material-ui/core';

import Videos from './Videos';
import { green } from '@material-ui/core/colors';
export class App extends Component {
 
  constructor(props){
    super(props);
    this.state={firstNewsUrl:''};
    this.state={firstNewsAbstract:''};
    this.state={secondNewsUrl: ''};
    this.state={secondNewsAbstract:''};
    this.state={thirdNewsUrl:''};
    this.state={thirdNewsAbstract:''};
    this.state={value:''};
    this.state={query:''};
    this.state={darkMode:false};
    this.search= this.search.bind(this);
    this.searching= this.searching.bind(this);
    this.switched= this.switched.bind(this);

  }
  
  componentDidMount(){
   
  }
  
  search=(event)=>{
    this.setState({value: event.target.value});
    
    console.log(this.state.value);
  }
  switched=(checked)=>{
    if(!this.state.darkMode)
    this.setState({darkMode:true});
    else{
      this.setState({darkMode:false});
    }
  }
  searching=(event)=>{
    event.preventDefault();
    
    this.fetchNews();

    console.log('Searching NY Times');
    console.log("===========================");
  }
  fetchNews= () =>{
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.value}&api-key=RQOqil03Y7fkaSYiZXF77VT1XO3Vu8Ok`)
    .then((response)=>{
      const testing= response.data;
      console.log(testing);
      const headlines1= response.data.response.docs[0].web_url;
      const headlinesAbstract= response.data.response.docs[0].abstract;
      const headlinesUrl= response.data.response.docs[1].web_url;
      const headlines2Abstract= response.data.response.docs[1].abstract;
      const headlinesUrl3= response.data.response.docs[2].web_url;
      const headlines3Abstract= response.data.response.docs[2].abstract;
      this.setState({firstNewsUrl:' '+headlines1});
      this.setState({firstNewsAbstract:'1. '+headlinesAbstract});
      this.setState({secondNewsUrl:''+headlinesUrl});
      this.setState({secondNewsAbstract:'2. '+headlines2Abstract});
      this.setState({thirdNewsUrl:''+headlinesUrl3});
      this.setState({thirdNewsAbstract:'3. '+headlines3Abstract});
      this.setState({value:''});
      console.log(headlines1);
      console.log(headlinesUrl);
    }).catch((error)=>{
      console.log(Error);
    })
  }
 
  render() {
    const darkTheme = createMuiTheme({
      palette:{
        type:'dark',
        
      },
    });
    const lightTheme = createMuiTheme({
      palette:{
        primary:green,
        secondary:green,
      }
    });
    return (
      <ThemeProvider theme={this.state.darkMode ? darkTheme : lightTheme}>
      <Paper>
      <div className="App">
        <center>
        <Grid item container direction="column">
          <Grid style={{backgroundColor:'green'}} item xs={12} md={12} lg={12}>
       Light Mode<Switch checked={this.state.darkMode} onChange={this.switched}/> Dark Mode
        </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={4}>
            Tweets
          </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} style={{}}>
        <SamanjaLogo/>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4} style={{}}>
          Weather
        </Grid>
        

        </Grid>
  </center>
        <hr/>
        <h3 style={{}}>This is a News app connected to the New York Times </h3>

        <div className="nytInputs" style={{padding:'10px'}}> 
        <table style={{position:'relative', left:'20%', width:'60%'}}>
       <tr>
         <td>
         <input style={{width:'60%', margin:'5px', padding:'5px'}} type="text" value={this.state.value} onChange={this.search} placeholder="Search The New York Times articles.. "/>
        <button style={{padding:'6px', margin:'3px', position:'relative',backgroundColor:'#017102', }} onClick={this.searching}>Submit</button>
        </td>
        </tr>
        
      <a style={{}} target='_blank' href={this.state.firstNewsUrl}>{this.state.firstNewsAbstract}</a>
       <a style={{}} target='_blank' href={this.state.secondNewsUrl}> {this.state.secondNewsAbstract}</a>
        <a style={{}} target='_blank' href={this.state.thirdNewsUrl}>{this.state.thirdNewsAbstract}</a>
       <tr><td>
         <MovieReviews/>
</td>
       </tr>
       <tr>
         <td>
       <BookReviews />
       </td>
       </tr>
       </table>
       <center>
         <Introduction/>
         <br/>
         <input type="text" placeholder="Search for projects in JAVA, JavaScript, React JS, Machine Learning, Python etc.." style={{ width:'60%', margin:'5px', padding:'5px'}}/>     
            <button style={{padding:'6px', margin:'3px', position:'relative',backgroundColor:'#017102', color:'white', border:'1px solid white'}} >Submit</button>

         <br/>
         <br/>
       <Videos width='100%'/>
      </center>
        </div>
      </div>
      </Paper>
      </ThemeProvider>
    )
  }
}

export default App