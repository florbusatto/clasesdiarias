import React, { Component } from 'react'; 	 
import homero from './../img/homero.jpg';   
import './../css/card.css';       

class Card extends Component { 

  render() {
    return(
      <div className="mainCard">  
       <div className="datos">

            <h2 className ="hello">Hello & Welcome</h2>   
            <img src={homero} className="homero" alt="homeroprofile"/>  
            <h1 className ="name">Homero Jay Simpson</h1> 
            <h3 className ="subtitle">Nuclear safety Inspector</h3> 
            <p className ="age">39</p> 
            <p className="address">742 Evergreen Terrace</p> 
            <p className="email">homerjay_simpson@hotmail.com</p>  
            <p className="phone">555-7334</p>  
            <p className="github">github/florbusatto</p>  

       </div> 

       <div className="socialmedia">

       </div>  
  
      </div>
             
    );
  }
}

export default Card;
