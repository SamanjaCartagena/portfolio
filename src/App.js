
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
export class App extends Component {
  
  constructor(props){
    super(props);
    this.state={firstNewsUrl:''};
    this.state={firstNewsAbstract:'1.'};
    this.state={secondNewsUrl: ''};
    this.state={secondNewsAbstract:''};
    this.state={thirdNewsUrl:''};
    this.state={thirdNewsAbstract:''};
    this.state={value:''};
    this.state={query:''};
    this.search= this.search.bind(this);
    this.searching= this.searching.bind(this);

  }
  componentDidMount(){
  }
  
  search=(event)=>{
    this.setState({value: event.target.value});
    
    console.log(this.state.value);
  }
  searching=(event)=>{
    event.preventDefault();
    
    this.fetchAdvice();

    console.log('Searching NY Times');
    console.log("===========================");
  }
  fetchAdvice= () =>{
    axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${this.state.value}&api-key=RQOqil03Y7fkaSYiZXF77VT1XO3Vu8Ok`)
    .then((response)=>{
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
    return (
      <div className="App">
        <SamanjaLogo/>
        <hr/>
        <h3 style={{color:'white'}}>The Search Engines has been connected to the New York Times API to initiate search for the right New York Times material</h3>

        <div className="nytInputs" style={{padding:'10px'}}> 
        <table style={{position:'relative', left:'20%', width:'60%'}}>
       <tr>
         <td>
         <input style={{width:'60%', margin:'5px', padding:'5px'}} type="text" value={this.state.value} onChange={this.search} placeholder="Search The New York Times articles.. "/>
        <button style={{padding:'6px', margin:'3px', position:'relative',backgroundColor:'#017102', color:'white', border:'1px solid white'}} onClick={this.searching}>Submit</button>
        </td>
        </tr>
        
      <a style={{color:'white'}} target='_blank' href={this.state.firstNewsUrl}>{this.state.firstNewsAbstract}</a>
       <a style={{color:'white'}} target='_blank' href={this.state.secondNewsUrl}> {this.state.secondNewsAbstract}</a>
        <a style={{color:'white'}} target='_blank' href={this.state.thirdNewsUrl}>{this.state.thirdNewsAbstract}</a>
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
       <table style={{ width:'85%',position:'relative',left:'7%'}}>
         {/**<tr style={{ width:'100%'}}>
           <td>
             <ReactPlayer url="https://youtu.be/p8KbhbG4FnI"/>

           </td>
           <td>
           <h3 style={{color:'white'}}>Building a chat app using Socket.io</h3>
           <h3 style={{color:'white'}}>Building a chat app using Firestore</h3>

           <p>Please check out my chat app in Google Play and Apple Play Store</p>
           <a className="allLinks" href="https://play.google.com/store/apps/details?id=com.samanja.shoply">Astoria Chat for Google Play</a><br/>
           <a className="allLinks" href="https://play.google.com/store/apps/details?id=com.samanja.shoply">Astoria Chat for Apple Store</a>
           </td>
           <td >
           <ReactPlayer url="https://youtu.be/p8KbhbG4FnI"/>
           </td>
         </tr>

    <br/>**/}
         <tr style={{ width:'100%'}}>
           <td>
             <ReactPlayer url="https://youtu.be/qGeateI0NsQ"/>

           </td>
           <td>
           <h3 style={{color:'white'}}>Building search filters</h3>
           <p>Please check out my blog on search filters</p>
           <a style={{color:'white', textDecoration:'underline'}} target="_blank" href="https://samchowdhury.medium.com/javascript-functions-map-filter-reduce-ed463fc47e49">JavaScript Map, Filter, Reduce</a>
           <Spinner/>
           </td>
           <td >
           <ReactPlayer url="https://youtu.be/jcnPVPK1Qe8"/>
           </td>
         </tr>
         
       </table>
      
        </div>
      </div>
    )
  }
}

export default App