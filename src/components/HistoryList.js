import React, { Component } from 'react';
import './css/History.css';
import History from './History';

class HistoryList extends Component {
  render() {
    return (
      <div className="col-4 history">
        <History/>
      </div>
    );
  }
}

export default HistoryList;