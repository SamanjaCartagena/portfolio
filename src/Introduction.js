import React, { Component } from 'react'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import './App.css';
export class Introduction extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){
        
    }
    render() {
        
        return (
            <div className="Introduction" style={{backgroundColor:'green', padding:'5px'}}>
                <a href=""  className="allLinks" style={{color:'white'}}><h4>Founder of InfinitudeX</h4></a>
                <a href="https://samchowdhury.medium.com/" className="allLinks" style={{color:'white'}}><h4>Author, Blogger, Contributor</h4></a>
                <h4 style={{color:'white'}}>Please check out my repos, my projects that have been launched and my open source contributions <a className="allLinks" href="https://github.com/SamanjaCartagena">Github Repos</a></h4>    


            
            </div>
        )
    }
    }



export default Introduction;
