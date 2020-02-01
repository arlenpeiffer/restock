import * as types from 'constants/types';

export default (state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        amount: 1,
        isChecked: false,
        name: action.item
      };

    case types.UPDATE_ITEM_AMOUNT:
      return {
        ...state,
        amount: action.amount
      };

    case types.UPDATE_ITEM_IS_CHECKED:
      return {
        ...state,
        isChecked: !state.isChecked
      };

    default:
      return state;
  }
};
