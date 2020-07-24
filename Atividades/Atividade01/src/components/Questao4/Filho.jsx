import React,{Component} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

export default class MinhaClasse extends Component{
    render(){
        return(
            <div class="card border-success mb-3">
                <h1 class="card-header bg-transparent border-success">Questão 4</h1>
                <div class="card-body text-success">
                    <h3>Nome: {this.props.nome}</h3>
                    <h3>Curso: {this.props.curso}</h3>
                    <h3>Cidade: {this.props.cidade}</h3>
                </div>
            </div>
        )
    }
    
}