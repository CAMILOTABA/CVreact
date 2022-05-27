import React, { Component } from 'react';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificate from './components/Certificate';
import Habilidades from './components/Habilidades';












class App extends Component {


  

  render() {

    

    const person = {
      avatar: 'https://umedia.umanizales.edu.co/wp-content/uploads/2021/10/Juan_Camilo_Tabares-300x225.jpeg',
      name: 'Camilo Tabares ',
      profession: 'Ingeniero en sistemas',
      bio: 'Ingeniero en sistemas y telecomunicaciones,estoy desarrolllando las competencias necesarias para satisfacer las necesidades de implementación de soluciones informáticas para el mundo del comercio electrónico velando, además, por su formación en cuanto a su sentido ético y su calidad humana.',
      address: 'Manizales,Caldas',
      
      social: [
        {name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100004720744822'},
        {name: 'twitter', url: 'https://twitter.com/taba'},
        {name: 'github', url: 'https://github.com/CAMILOTABA'},

      ],
      experience: [
        {jobTitle: 'Desarrollador', company: 'Cetanix', startDate: '2022', endDate: 'Presente', jobDescription: 'Desarrollamos un proyecto con los lenguajes javascript-css-html5-php, el sistema registraba al usuario y inicia sesion donde le daba un código Qr para un programa del smartphone que por cuestiones de tiempo no logramos desarrollar además de esto el usuario en la página podia eliminar sus datos consultarlos .'},
        
        
      ],
      education: [
        {degree: 'Tecnico en sistemas', institution: 'Umanizales', startDate: '2018', endDate: '2019', description: 'Técnico profesional en configuraciones de servicios comerciales webPuedo decir que obtuve las mejores notas en todos los semestres y en el proyecto final junto a mi equipo un gran reconocimiento de nuestros profesores'},
        {degree: 'Ingenieria en sistemas y telecomunicaciones', institution: 'Umanizales', startDate: '2020', endDate: 'Actualmente', description: 'Ingeniero en sistemasActualmente me encuentro estudiando esta Carrera'},
      ],
      certificate: [
        {name: 'PRESENTACION GENERAL', description: '¡Hola! tengo 20 años, soy desarrollador web,tecnico en reparaciones,comerciante apasionado por la tecnologia y la programación. Me caracterizo por ser una persona responsable, brindando soluciones tecnológicas óptimas, he resuelto mas de 100 problemas a diferentes dispositivos tecnologicos . Reconociendo y plasmando satisfactoriamente las necesidades de mis clientes, permitiendo que tanto personas como empresas nos contraten para desarrollo web y soporte tecnologico. Dame la oportunidad de brindar diferentes servicios tecnologicos.' },
        {name: 'Habilidades', description: '-Reconozco claramente cuales son los lenguajes de programación básicos para la realización de una página web de calidad.'},
        {description: '-Mantengo una imagen de marca buena reconociendo los colores y el diseño que debe llevar la página.'},
        { description: '-curiosidad hasta que no soluciono problemas con los códigos no detengo mi trabajo. Manejo de las bases de datos phpmyadmin' },
      ],
      Habilidades: [
        {name: 'HTML5', percentage: '95%'},
        {name: 'CSS', percentage: '90%'},
        {name: 'JavaScript', percentage: '75%'},
        {name: 'PHP', percentage: '50%'},
        {name: 'Psd', percentage: '50%'},
        {name: 'Ilustrator', percentage: '50%'},

        
      ],
      
  

      

    };


  

    

    return (
      
      <header>
        <div className='wrapper'>
        
          <div className='sidebar'>
            <About
              avatar={person.avatar}
              name={person.name}
              profession={person.profession}
              bio={person.bio}
              address={person.address}
              social={person.social}
        />

              
          </div>

          <div className='content-wrapper'>
              <div className='content'>
                <Experience experience={person.experience} />
                <Education education={person.education} />
                <Certificate certificate={person.certificate} />
                <Habilidades Habilidades={person.Habilidades} />
                

               
         
              </div>
          </div>

          <div className='content'>


            <h1>Contactame</h1>

            <p>Me puedes contacar en las redes sociales o traves de este contacto en modo formulario</p>

        <form className='form' action="/my-handling-form-page" method="post">
            <ul>
              <li>
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="user_name" />
              </li>
              <li>
                <label for="mail">Correo electrónico:</label>
                <input type="email" id="mail" name="user_email" />
              </li>
              <li>
                <label for="msg">Mensaje:</label>
                <textarea id="msg" name="user_message"></textarea>
              </li>

              </ul>    
        </form>    
        
        </div>

         
        

        </div>
        
      </header>


      




    );
  }
}

export default App;
