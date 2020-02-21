import * as types from 'constants/types';

export default (state, action) => {
  switch (action.type) {
    case types.DECREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount - 1
      };

    case types.INCREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount + 1,
        isChecked: false
      };

    case types.TOGGLE_IS_CHECKED:
      return {
        ...state,
        isChecked: !state.isChecked
      };

    default:
      return state;
  }
};
