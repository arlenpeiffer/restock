import * as types from 'constants/types';
import itemReducer from 'reducers/itemReducer';

export default (state, action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      const itemExists = state.find(item => item.name === action.item);

      const itemInit = {
        amount: 0,
        isChecked: false,
        name: action.item
      };

      if (itemExists) {
        return state.map(item => {
          if (item.name === action.item) {
            return itemReducer(item, action);
          }
          return item;
        });
      }
      return [...state, itemReducer(itemInit, action)];

    case types.TOGGLE_IS_CHECKED:
      return state.map(item => {
        if (item.name === action.item) {
          return itemReducer(item, action);
        }
        return item;
      });

    default:
      return state;
  }
};
