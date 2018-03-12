import * as actionTypes from '../utils/types';

export const onClickNumber = (number) => ({
  type: actionTypes.INPUT_NUMBER,
  number,
});