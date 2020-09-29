import React, { Component } from "react";

import Card from "./Card";

import { connect } from 'react-redux';

class Multiplicacao extends Component {
  render() {
    return (
      <Card title="Multiplicação">
        <h1>{this.props.numberOne * this.props.numberTwo}</h1>
      </Card>
    );
  }
}


function mapStateToProps(state) {
  return {
    numberOne: state.number.number1,
    numberTwo: state.number.number2
  }
}

export default connect(mapStateToProps)(Multiplicacao)
