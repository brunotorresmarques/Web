import React, { Component } from 'react'
//import axios from 'axios'

import TableRow from './TableRow'
import FirebaseContext from '../utils/FirebaseContext'
import FirebaseServece from '../services/FirebaseService'

const ListPage = () =>(
    <FirebaseContext.Consumer>
        {Contexto => <List firebase={Contexto}/>}
    </FirebaseContext.Consumer>
)

class List extends Component {

    constructor(props){
        super(props)
        this._isMounted = false
        this.state = {disciplinas:[]}
        this.apagarElementoPorId = this.apagarElementoPorId.bind(this)
    }

    componentDidMount(){
        this._isMounted = true
       //this.ref = this.props.firebase.getFirestore().collection('disciplinas')
        //this.ref.onSnapshot(this.alimentarDisciplinas.bind(this))
        FirebaseServece.list(this.props.firebase.getFirestore(),(disciplinas)=>{
            if(disciplinas){
                if(this._isMounted){
                    this.setState({disciplinas:disciplinas})
                }
            }})
    }

    componentWillUnmount(){
        this._isMounted = false 
    }

    /*alimentarDisciplinas(query){
        let disciplinas = []
        query.forEach(
            (doc) => {
            const {nome, curso, capacidade} = doc.data()
            disciplinas.push(
                {
                    _id : doc.id,
                    nome,
                    curso,
                    capacidade,
                }
            )
        });
        if(this._isMounted){
            this.setState({disciplinas:disciplinas})
        }
    }*/

    montarTabela(){
        if(!this.state.disciplinas) return
        return this.state.disciplinas.map(
            (est,i)=>{
                return <TableRow disciplinas={est} 
                                 key={i} 
                                 apagarElementoPorId={this.apagarElementoPorId}
                                 firebase={this.props.firebase}/>
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
export default ListPage