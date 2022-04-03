import React from 'react';
import './App.css';
import Dev from './componentes/developer/dev';
import Hero from './componentes/hero/hero';
import Info from './componentes/info/info';
import Navbar from './componentes/navegacion/navbar';
import Sub from './componentes/suscripcion/sub';

function App() {
  return (
    <div>
     <Navbar />
     <Hero />
     <Info />
     <Dev />
     <Sub />
    </div>
  );
}

export default App;
