import React, { Component } from 'react';
import edificio1 from './edificio1.png';	
import edificio2 from './edificio2.png';
import './App.css';

class App extends Component {
  render() {
    return (	
    		<div className="mainContainer">
    	     <div className= "Info">
             	<p id= "lanacion"> LA NACIÓN | TECNOLOGÍA | TECNOLOGÍA </p>   
             </div>	
             <div>
              <h1><strong>Japón planea tener el rascacielos de madera más alto del mundo en Tokio</strong></h1>     
              <img src={edificio1} className="edificio1" alt="edificio1"/>  
              <p id="metros">Tendrá 350 metros de altura y será la más alta en su tipo, con una construcción cuya estructura combina nueve partes de madera y una de acero.</p> 
             </div> 	
             <div>
              <p id="febrero">16 de febrero de 2018 • <span className="hora">00:16</span></p>              
              <p><span className= "capital">E</span>l constructor y desarrollador inmobiliario <a class="link" href="japones"> Sumitomo Forestry,</a> especializado en la industria forestal, planea tener para las próximas décadas el ambicioso objetivo de desarrollar una torre rascacielos de 350 metros de altura. Como referencia, el edificio más alto de Buenos Aires será el Alvear Tower, una construcción tradicional de 235 metros, mientras que el edificio más alto de madera es el Brock Commons Tallwood House, un edificio de 53 metros de altura ubicado en la Universidad de Columbia Británica en Vancouver, Canadá. 
              El proyecto, diseñado por Nikken Sekkei, buscará combinar una proporción de 9 a 1 de madera y acero para la particular estructura solicitada por Sumitomo para celebrar el 350 aniversario de la compañia en 2041 con una estructura que transforme a Tokio en un bosque.La estructura de la torre de madera más alta del  mundo cumplirá con los reglamentos antisismicos para este tipo de edificios y se destinará para un hotel, oficinas, residencias y tiendas. Su costo estimado será de unos 5,9 millones de dólares.Cuando finalice, la torre de Sumitomo Forestry no sólo será la más alta del mundo, sino que también superará a los rascacielos tradicionales de todo Japón.</p>          
            </div>		
            <div>
             <img src={edificio2} className="edificio2" alt="edificio2"/>  
             <p className="ultimo">El proyecto deberá superar las estrictas normas japonesas que restringen el uso de la madera para evitar incendios.</p>    	
            </div>	
           </div>
             
    );
  }
}

export default App;
