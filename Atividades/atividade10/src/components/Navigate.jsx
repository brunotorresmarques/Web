import React, { Component } from "react";

import "../App.css";

import Card from "./Card";

import { connect } from 'react-redux'

class Navigate extends Component {
  render() {
    return (
        <div className="line">
            <Card title="Número 1">
                <h1>{this.props.numero1}</h1>
            </Card>

            <Card title="Número 2">
                <h1>{this.props.numero2}</h1>
            </Card>
        </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    numero1: state.number.number1,
    numero2: state.number.number2
  }
}

export default connect(mapStateToProps)(Navigate)
