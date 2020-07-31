import React from 'react';
import './App.css';
import Q1 from  './components/Questao1/Arena'
import Q3 from './components/Questao3/World'
import Q2 from './components/Questao2/Arena'
import Q4 from './components/Questao4/Arena'
import Hero from './components/Questao4/Hero'
import Enemy from './components/Questao4/Enemy'
import Consts, { Img, Img2 } from './components/Questao2/Consts'

function App() {
  return (
    <div className="App">
      <Q4 arena='Arena 4'>
            <Hero nome='Flach' imagem={Img}/>
            <Enemy nome='Professor Zoom' imagem={Img2}/>
      </Q4>
    </div>
  );
}

export default App;
