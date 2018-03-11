import React, { Component } from 'react';
// estilos para la calculadora
import './css/ContentOperation.css';
import BoxNumber from './BoxNumber';
import BoxOperation from './BoxOperation';

class ContentOperation extends Component {
  render() {
    return (
      <div className="container mx-auto">
        <div className="boxCalculator row">
          <div className="col-xs-3 col-sm-6 col-md-9">
            <BoxNumber />
          </div>
          <div className="col-xs-9 col-sm-6 col-md-3">
            <BoxOperation />
          </div>
        </div>
      </div>
    );
  }
}

export default ContentOperation;
