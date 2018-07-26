import React, { Component } from 'react';
import './../css/header.css';	    

class Header extends Component { 

  render() {
    return(
      <div className="mainContainer">	
       <div className = "info">
            <h1 className ="name">Homero Jay Simpson</h1> 
            <p className = "description-header">Nuclear safety Inspector</p>                
       </div>	
       <div className="socialMedia">    
       </div>	
      </div>
             
    );
  }
}

export default Header;
