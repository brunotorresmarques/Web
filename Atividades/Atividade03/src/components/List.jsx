import React, { Component } from 'react'
import axios from 'axios'

import TableRow from './TableRow'

export default class List extends Component {

    constructor(props){
        super(props)
        this.state = {disciplinas:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3001/disciplinas') //json-server
        .then(
            (res)=>{
                //console.log(res.data)
                this.setState({disciplinas:res.data})
                //console.log(this.state.estudantes)
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )
    }

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (est,i)=>{
                return <TableRow disciplinas={est} 
                                 key={i} 
                                 apagarElementoPorId={this.apagarElementoPorId}/>
            }
        )
    }

    apagarElementoPorId(id){
        let tempDisciplinas = this.state.disciplinas
        for(let i=0;i<tempDisciplinas.length;i++){
            if(tempDisciplinas[i]._id === id){
                tempDisciplinas.splice(i,1)
            } 
        }
        this.setState({disciplinas:tempDisciplinas})
    }

    render() {
        return (
            <div style={{ marginTop: 10 }}>
                <h3>Listar Disciplinas</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome</th>
                            <th>Curso</th>
                            <th>Capacidade</th>
                            <th colSpan="2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.montarTabela()}
                    </tbody>

                </table>


            </div>
        )
    }
}