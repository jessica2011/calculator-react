import React, { Component } from 'react';
import './css/ShowResult.css';

class ShowResult extends Component {
  render() {
    return (
      <div>
        <div >
        <form className="showNumber text-center">
          <output name="text"></output>
        </form>
        </div>
      </div>
    );
  }
}

export default ShowResult;