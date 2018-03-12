import React, { Component } from 'react';
import './css/Operation.css'
const arrayOperation = ['C', '/', 'x', '-', '+'];

class Operation extends Component {
  render() {
    return (
      <div className="col-5 float-left">
        <div className="box-number">{arrayOperation.map((elem, i) =>{
          return <button type="button" className="btn btn-info btn-operation" key={i}>{elem}</button>
        })}</div>
      </div>
    );
  }
}

export default Operation;