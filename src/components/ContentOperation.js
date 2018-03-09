import React, { Component } from 'react';
// estilos para la calculadora
// import './App.css';
import BoxNumber from './BoxNumber';
import BoxOperation from './BoxOperation';

class ContentOperation extends Component {
  render() {
    return (
      <div>
        <BoxNumber/>
        <BoxOperation/>
      </div>
    );
  }
}

export default ContentOperation;
