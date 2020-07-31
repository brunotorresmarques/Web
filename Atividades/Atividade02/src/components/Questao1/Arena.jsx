import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import Im1 from '../Imagens/Flach.png'
import Im2 from '../Imagens/Inimigo.png'


export default ()=>{
    return(
        <div>
            <h1 class="text-success">Questão 1</h1>
            <Hero nome='Flach' imagem={Im1}/>
            <br />
            <Enemy nome='Professor Zoom' imagem={Im2}/>
        </div>
    )
}

 