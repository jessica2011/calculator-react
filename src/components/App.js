import React, {Component} from 'react';
import './App.css';
import ShowResult from './ShowResult';
import HistoryList from './HistoryList';
import ContentOperation from './ContentOperation';
// importando API
import Api from  './Api';



class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="">
          <div className="App row">
            <div className="col-3">
              <HistoryList/>
            </div>
            <div className="col-9">   
              <div className="row">
                <div className="col-12">
                  <ShowResult/>
                </div>
              </div> 
              <div className="row">
                <div className="col-12">
                  <ContentOperation/>
                </div>
              </div>         
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;
