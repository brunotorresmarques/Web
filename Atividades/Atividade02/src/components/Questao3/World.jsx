import React from 'react'
import Hero from './Hero'
import Enemy from './Enemy'
import Im1 from '../Imagens/Flach.png'
import Im2 from '../Imagens/Inimigo.png'
import Arena from './Arena'


export default ()=>{
    return(
        <div>
            <Arena>
                <Hero nome='Flach' imagem={Im1}/>
                <br />
                <Enemy nome='Professor Zoom' imagem={Im2}/>
            </Arena>
            <br/>
            <Arena>
                <Hero nome='Flach' imagem={Im1}/>
                <br />
                <Enemy nome='Professor Zoom' imagem={Im2}/>
            </Arena>
            <br/>
            <Arena>
                <Hero nome='Flach' imagem={Im1}/>
                <br />
                <Enemy nome='Professor Zoom' imagem={Im2}/>
            </Arena>
        </div>
    )
}

 