import React,{Component} from 'react';
import axios from 'axios'
import Character from './characters'
import Header from './header'

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
<Router>
<div>
    <Header characters={this.state.character}/>

	<div>
	    <table className="striped">
        <thead>
          <tr>
              <th>Name</th>
              <th>Gender</th>
              <th>Height</th>
              <th>Homeworld</th>
              <th>Birth Year</th>
          </tr>
        </thead>

        <tbody>
          <Character  characters={this.state.characters}/>
        </tbody>
      </table>
   
    </div>

    <Footer />

 </div>   
 </Router>
	);
}
}

export default App;
