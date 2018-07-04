import React, { Component } from 'react';
import Header from './componentes/header';  
import Skills from './componentes/skills';
import Aside from './componentes/aside';
import Sectionuno from './componentes/sectionuno';
import Sectiondos from './componentes/sectiondos';
import Sectiontres from './componentes/sectiontres';
import Footer from './componentes/footer';   
import './App.css';

class App extends Component { 
 
  render() {
    return (  
           <div> 

           <Header/>
           <Skills/> 
           <Aside/>  
           <Sectionuno/> 
           <Sectiondos/> 
           <Sectiontres/>  
           <Footer/>  
               
           </div>
             
    );
  }
}

export default App;