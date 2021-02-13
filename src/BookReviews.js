import React, { Component } from 'react'
import axios from 'axios'
export class BookReviews extends Component {
    constructor(props){
        super(props);
        this.state={bookValue:''};
        this.state={book1Title:''};
        this.state={book1Url:''};
        this.state={book1Author:''};
        this.state={book1Summary:''};
        this.searchBooks=this.searchBooks.bind(this);
    }
    
    searchBooks=(event)=>{
        this.setState({bookValue: event.target.value});
        console.log(this.state.bookValue);

    }
    bookSubmit=(event)=>{
        event.preventDefault();
    this.fetchAdvice2();

    console.log('Searching NY Times book reviews');
    console.log("===========================");
    }
    fetchAdvice2= () =>{
        axios.get(`https://api.nytimes.com/svc/books/v3/reviews.json?title=Becoming&api-key=RQOqil03Y7fkaSYiZXF77VT1XO3Vu8Ok
        `)
        
        .then((response)=>{
          const book1Titles= response.data.results[0].book_title;
          const book1Urls= response.data.results[0].url;
          const book1Summarys= response.data.results[0].summary;
          const book1Authors= response.data.results[0].book_author;
          console.log(book1Titles);
         this.setState({book1Title:''+book1Titles});
         this.setState({book1Url:''+book1Urls});
         this.setState({book1Summary:''+book1Summarys});
         this.setState({book1Author:'  by: '+book1Authors});
         this.setState({bookValue:''});

        }).catch((error)=>{
          console.log(Error);
        })
      }
    render() {
        return (
            <div style={{position:'relative'}}>

                <input style={{width:'60%', margin:'5px', padding:'5px'}} type="text" value={this.state.bookValue} onChange={this.searchBooks} placeholder="Search The New York Times for Book Reviews.. "/>
                <button style={{padding:'6px', margin:'3px', position:'relative',backgroundColor:'#017102', color:'white', border:'1px solid white'}} onClick={this.bookSubmit} >Submit</button>
                <h3 > <a style={{color:'white'}} target='_blank' href={this.state.book1Url}>{this.state.book1Title}{this.state.book1Author}<br/>{this.state.book1Summary}</a></h3>
            </div>
        )
    }
}

export default BookReviews
