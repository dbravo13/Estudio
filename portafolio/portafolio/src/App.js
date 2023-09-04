import Meca from './image/Logo.png'
import Wall from './image/lola.svg'
import Luigi from './image/Luigi.png'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='Tool-bard'>
        <div className='Fondo'>
          <div className='Logo-contenedor'>
            <img className='Logo' src={Meca} alt='Logo-meca'/>
          </div>
          <div className='nav-toggle'>
          </div>
        </div>

      
      </div>
      <div className="Wallpaper-contenedor">

        <div className="gradient-overlay"/> {/* Contenedor del gradiente */}
        <img className='Wallpaper' src={Wall} alt='Wallpaper'/>
        
      </div>
      <div className='informacion'>
        <div className='informacion-uno'>
          <p>
            <span>✌🏻</span>
            ¡Hola! soy David Bravo
            <span>🦖</span>
          </p>
          
        </div>
        <div className='informacion-dos'>
          <h1>
            
            <span>Ingeniero Mecatrónico</span> con una pasión por  el 
            <span> desarrollo de software</span>, buscando siempre la excelencia en cada <span>proyecto.</span>    
          </h1>
        </div>
        <div className='informacion-tres'>
          <h1>
            
            
          </h1>
        </div>
        <img className='Mario' src={Luigi} alt='Mario'/>
      </div>
    </div>
  );
}

export default App;
