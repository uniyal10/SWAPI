import React,{Component} from 'react';
import axios from 'axios'
import Character from './characters'
import Header from './header'
import Table from './table'

import Footer from './footer'
import {BrowserRouter as Router,Link} from 'react-router-dom'
import Route from 'react-router-dom'



class App extends Component {
  state={
  	characters:[]
  }
  componentDidMount(){
  	axios.get("https://swapi.co/api/people/?format=json")
  	 .then(res=>
          this.setState({characters:res.data.results})
          
  	 	)
  }
  render(){

return(
<div>
    <Header characters={this.state.character}/>
    <Table characters={this.state.characters} />
    <Footer />
 </div>   
	);
}
}

export default App;
