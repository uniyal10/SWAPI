import React,{Component} from 'react';
import {Link} from 'react-router-dom'


const Character=({characters})=>{
	console.log(characters);
	return(
	characters.map(c=>{
		return(
         <tr >
            <td>{c.name}</td>
            <td>{c.gender}</td>
            <td>{c.heigh}t</td>
            <td>{c.homeworld}</td>
            <td>{c.birth_year}</td>

          </tr>
           
			);
	})
	);
}
export default Character;