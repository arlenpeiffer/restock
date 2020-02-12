import * as types from 'constants/types';
import itemReducer from 'reducers/itemReducer';

export default (state, action) => {
  const newItem = {
    amount: 0,
    isChecked: false,
    name: action.item
  };

  const itemExists = state.find(item => item.name === action.item);

  const stateWithReducedItem = state.map(item =>
    item.name === action.item ? itemReducer(item, action) : item
  );

  switch (action.type) {
    case types.DECREMENT_AMOUNT:
      return stateWithReducedItem.filter(item => item.amount > 0);

    case types.INCREMENT_AMOUNT:
      itemExists
        ? stateWithReducedItem
        : [...state, itemReducer(newItem, action)];

    case types.TOGGLE_IS_CHECKED:
      return stateWithReducedItem;

    default:
      return state;
  }
};
