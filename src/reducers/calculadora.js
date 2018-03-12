import * as actionTypes from '../utils/types';

// supuestamente son los estados
const calculadoraState = {
  inputValue: 0,
  resultValue: 0,
  showingResult: false,
};

const calculadora = (state = calculadoraState, action) => {
  if (action.type == actionTypes.INPUT_NUMBER) {
    return {
      ...state,
      inputValue: state.inputValue * 10 + action.number,
      showingResult: false,
    }
  } else {
    return {
      ...state
    }
  }
}

export default calculadora