import React, { Component } from 'react';	  
import './../css/education.css';      

class Education extends Component { 

  render() {
    return(
      <div className="mainEducation">	  
       <div className="education-title">  
         <h1 className="titulo">Education</h1>  
        </div>
        <div className="edu1">
            <h1 className ="ada">Ada ITW</h1> 
            <p className = "description-ada">Front-end Bootcamp</p> 	
            <p className= "year"> Marzo - Julio 2018</p>               
      </div>		
      <div className="edu2">
            <h1 className ="umsa">UMSA</h1> 
            <p className = "description-umsa">Abogacìa</p> 	
            <p className= "year"> Marzo 2016 - Actual</p>           
      </div>		
      <div className="edu3">
            <h1 className ="uba">Universidad de Buenos Aires</h1> 
            <p className = "description-uba">Asistente de RRHH</p> 	
            <p className= "year"> Junio - Agosto 2015</p>                 
      </div>		
      <div className="edu4">
            <h1 className ="uba">Universidad de Buenos Aires</h1> 
            <p className = "description-uba">Asistente de RRHH</p> 	
            <p className= "year"> Junio - Agosto 2015</p>                 
      </div>	

      </div>	
    );
  }
}

export default Education;
