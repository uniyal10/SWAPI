import React,{Component} from 'react'
import Character from './characters'


class Table extends Component{
	render(){
	return(
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
          <Character characters={this.props.characters} />
        </tbody>
      </table>
   
    </div>
         
		);
}
}

export default Table;