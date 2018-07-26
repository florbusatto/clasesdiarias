import React, { Component } from 'react'; 
import './../css/skills.css'; 

class Skills extends Component {

 constructor (props) {
   super(props);

   this.state = {
     skills: [],
   }
 }

 componentDidMount () {
   fetch('api/skills')
     .then(response => {
       return response.json()
     })
     .then(data => {
       this.setState({ skills: data.skills})
     })
     .catch(err => {
      // alert('Fail')
     })
 }

 render(){
   var mis_Skills = this.state.skills.map(s => {
     return <div className='info-skills'>{s.nombre},{s.porcentaje}</div>
   })

 return(
 
     <div className='container-skills'>

       <h3 className='h3-skills'>Skills</h3>

        <p className='p-skills'></p>


       <div className='info-skills'>

       {mis_Skills}

       </div>

       <div className='progressbar'>
       </div>
       
     </div>
   );
 }
}

export default Skills;