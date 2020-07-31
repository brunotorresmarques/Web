import React from 'react'



export default (props)=>{
    return(
        <div>
            <h3 class="text-primary">Herói</h3>
            <img src={props.imagem}/>
            <div class="text-primary">{props.nome} da Liga da Justiça</div>
        </div>
    )
}