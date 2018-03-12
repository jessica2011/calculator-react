import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import './css/Number.css';
import { onClickNumber } from '../actions';

const arrayNumber = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '='];



const Number = ({ onClickNumber }) => {
  return (
      <div className="">
        <div className="box-number">{arrayNumber.map((elem, i) =>{
          return <button type="button" className="btn btn-info btn-number" onClick={ () => onClickNumber(elem)} key={i}>{elem}</button>
        })}</div>
        <button type="button" className="col-11 btn btn-outline-danger">Borrar</button>
      </div>
    );
};

Number.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Number;