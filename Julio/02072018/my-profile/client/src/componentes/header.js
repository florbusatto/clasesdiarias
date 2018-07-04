import React, { Component } from 'react';
import florenciabusatto from './../img/florenciabusatto.png';  
import github from './../img/github.png';     
import './../App.css';

class Header extends Component { 

  render() {
    return (
      <div className=mainContainer>
            <h1>Marìa Florencia Busatto</h1> 
            <p>Estudiante de Front End en Ada ITW.</p>
            <img src={github} className="github" alt="github"/>                
      </div>
             
    );
  }
}

export default Header;
