import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import Consts, { Img, Img2 } from './Consts'


export default ()=>{
    return(
        <div>
            <h1 class="text-success">Questão 2</h1>
            <Hero nome='Flach' imagem={Img}/>
            <br />
            <Enemy nome='Professor Zoom' imagem={Img2}/>
        </div>
    )
}

 