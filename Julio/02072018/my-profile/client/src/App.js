import React, { Component } from 'react';
import Header from './componentes/header';  	
import Card from './componentes/card';
import Skills from './componentes/skills';
import Education from './componentes/education';
import Repositories from './componentes/repositories';  
import './App.css';

class App extends Component { 
 
  render() {
    return(  
            <div> 
            <Header/> 
            <Card/>
            <Skills/> 
            <Education/>  
            <Repositories/>    
            </div>
           );
  }
}

export default App;