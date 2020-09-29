import React, { Component } from "react";

import Card from "./Card";

import { connect } from 'react-redux';

class Maior extends Component {

  maior() {
    if(this.props.numero1 > this.props.numero2) {
      return this.props.numero1
    }
    else if (this.props.numero2 > this.props.numero1){
      return this.props.numero2
    }
    else return <h1>iguais</h1>  
  }

  render() {
    return (
      <Card title="Maior">
        <h1>{this.maior()}</h1>
      </Card>
    );
  }
}

function mapStateToProps(state) {
  return {
    numero1: state.number.number1,
    numero2: state.number.number2
  }
}

export default connect(mapStateToProps)(Maior)
