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
                <h4>Full Stack Developer</h4>
               {/**  <a href="https://www.infinitudex.com/" target="_blank" className="allLinks" style={{color:'white'}}><h4>Founder of InfinitudeX</h4></a>**/}
                <a href="https://samchowdhury.medium.com/" target="_blank" className="allLinks" style={{color:'white'}}><h4>Author, Blogger, Contributor</h4></a>
                <h4 style={{color:'white'}}>Please check out my repos, my projects that have been launched and my open source contributions <a className="allLinks" target="" href="https://github.com/SamanjaCartagena">Github Repos</a></h4>    


            
            </div>
        )
    }
    }



export default Introduction;
