import React, { Component } from 'react';
import './css/ShowResult.css';

class ShowResult extends Component {
  render() {
    const {inputValue, resultValue, showingResult} = this.props;
    return (
      <div className="col-12">
        <form className="showNumber text-center">
          <output name="text">{inputValue}</output>
        </form>
      </div>
    );
  }
}

export default ShowResult;