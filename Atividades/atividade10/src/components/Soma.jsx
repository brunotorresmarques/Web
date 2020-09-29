import React, { Component } from "react";

import Card from "./Card";

import { connect } from 'react-redux'

class Soma extends Component {
  render() {
    return (
      <Card title="Soma">
        <h1>{this.props.numero1 + this.props.numero2}</h1>
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

export default connect(mapStateToProps)(Soma)