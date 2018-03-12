import React, { Component } from 'react';
// estilos para la calculadora
import './css/ContentOperation.css';
import BoxNumber from './BoxNumber';
import BoxOperation from './BoxOperation';

class ContentOperation extends Component {
  render() {
    const { onClickNumber } = this.props;
    return (
      <div className="col-8">
        <div className="container mx-auto">
          <div className="boxCalculator row">
            <div className="col-xs-3 col-sm-6 col-md-9">
              <BoxNumber onClickNumber={ (e) => onClickNumber(e) } />
            </div>
            <div className="col-xs-9 col-sm-6 col-md-3">
              <BoxOperation />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentOperation;
