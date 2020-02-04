import * as types from 'constants/types';

export default (state, action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      return {
        ...state,
        amount: state.amount + 1
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
