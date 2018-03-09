import React, {Component} from 'react';
// import './App.css';
import ShowResult from './ShowResult';
import HistoryList from './HistoryList';
import ContentOperation from './ContentOperation';
// importando API
import Api from  './Api';



class App extends Component {
  render() {
    return (
      <div className="App">
        <ShowResult/>
        <HistoryList/>
        <ContentOperation/>
      </div>
    );
  }
}

export default App;
