import React, { Component } from 'react';
import './css/Number.css'

const arrayNumber = [7, 8, 9, 4, 5, 6, 1, 2, 3, '.', 0, '='];

class Number extends Component {
  render() {
    return (
      <div className="col-7 float-right">
        <div className="box-number">{arrayNumber.map((elem, i) =>{
          return <button type="button" class="btn btn-info btn-number" key={i}>{elem}</button>
        })}</div>
        <button type="button" class="col-10 btn btn-outline-danger">Borrar</button>
      </div>
    );
  }
}

export default Number;