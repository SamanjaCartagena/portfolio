import React, { Component } from 'react'
import axios from 'axios'
export class MovieReviews extends Component {
    constructor(props){
        super(props);
        this.state={movieValue:''};
        this.state={movie1Title:''};
        this.state={movie1Url:''};
        this.state={movie1Summary:''};
        this.searchMovies=this.searchMovies.bind(this);
    }
    
    searchMovies=(event)=>{
        this.setState({movieValue: event.target.value});
        console.log(this.state.movieValue);

    }
    movieSubmit=(event)=>{
        event.preventDefault();
    this.fetchAdvice1();

    console.log('Searching NY Times movie reviews');
    console.log("===========================");
    }
    fetchAdvice1= () =>{
        axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.movieValue}&api-key=RQOqil03Y7fkaSYiZXF77VT1XO3Vu8Ok`)
        
        .then((response)=>{
          const movie1Titles= response.data.results[0].display_title;
          const movie1Urls= response.data.results[0].link.url;
          const movie1Summarys= response.data.results[0].summary_short;
          console.log(movie1Titles);
          console.log(response.data);
          this.setState({movie1Title:'1. '+movie1Titles});
          this.setState({movie1Url:''+movie1Urls});
          this.setState({movie1Summary:''+movie1Summarys});
          this.setState({movieValue:''});


        }).catch((error)=>{
          console.log(Error);
        })
      }
    render() {
        return (
            <div style={{position:'relative'}}>

                <input style={{width:'60%', margin:'5px', padding:'5px'}} type="text" value={this.state.movieValue} onChange={this.searchMovies} placeholder="Search The New York Times for Movie Reviews.. "/>
                <button style={{padding:'6px', margin:'3px', position:'relative',backgroundColor:'#017102', color:'white', border:'1px solid white'}} onClick={this.movieSubmit} >Submit</button>
                 <a style={{color:'white'}} target='_blank' href={this.state.movie1Url}>{this.state.movie1Title}<br/>{this.state.movie1Summary}</a>
            </div>
        )
    }
}

export default MovieReviews
