import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import ShowResult from './ShowResult';
import HistoryList from './HistoryList';
import ContentOperation from './ContentOperation';

import * as actions from '../actions';

// importando API
import Api from './Api';

class App extends Component {
  
  render() {
    const { calculadora, actions } = this.props;
    return (
      <div className="container">
        <div className="row">
          <ShowResult {...calculadora} />
        </div>
        <div className="row">
          <HistoryList/>
          <ContentOperation {...actions} />
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  calculadora: state.calculadora,
});

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapState, mapDispatch)(App);
