import React, { Component } from 'react';
import PropTypes from "prop-types";
// estilos para la calculadora
// import './App.css';
import { onClickNumber } from '../actions';
import Number from './Number';


const BoxNumber = ({onClickNumber}) => {
  return (
    <div className="col-9">
      <Number onClickNumber={onClickNumber}/>
    </div>
  )
}

BoxNumber.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}


export default BoxNumber;