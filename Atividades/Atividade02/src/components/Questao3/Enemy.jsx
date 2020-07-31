import React from 'react'
import Im1 from '../Imagens/Inimigo.png'


export default (props)=>{
    return(
        <div>
            <h3 class="text-danger">Inimigo</h3>
            <img src={props.imagem}/>
            <div class="text-danger">{props.nome} da Liga da Injustiça</div>
        </div>
    )
}