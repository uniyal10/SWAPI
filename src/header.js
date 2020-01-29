import React from 'react'


const Header=()=>{
	return(
       <nav>
    <div className="nav-wrapper">
      <a href="#" className="brand-logo"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/1200px-Star_wars2.svg.png" height="40px" width="80px"/></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Characters</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>

		);
}


export default Header;