import React, { Component } from 'react';
// estilos para la calculadora
import './css/ContentOperation.css';
import BoxNumber from './BoxNumber';
import BoxOperation from './BoxOperation';

class ContentOperation extends Component {
  render() {
    return (
      <div className="boxCalculator row">
        <div className="col-9">
          <BoxNumber />
        </div>
        <div className="col-3">
          <BoxOperation />
        </div>
      </div>
    );
  }
}

export default ContentOperation;
