import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


export default (props)=>{
    return(
        <div class="card bg-light mb-3">
            <h1>Questão 3</h1>
            <h3>Nome: {props.nome}</h3>
            <h3>Curso: {props.curso}</h3>
            <h3>Cidade: {props.cidade}</h3>
        </div>
    )
}