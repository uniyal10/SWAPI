import React,{Component} from 'react';
import axios from 'axios'
import Character from './characters'
import Header from './header'



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

 </div>   
	);
}
}

export default App;
