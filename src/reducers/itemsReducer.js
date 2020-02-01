import * as types from 'constants/types';
import itemReducer from 'reducers/itemReducer';

export default (state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return [...state, itemReducer(null, action)];

    case types.UPDATE_ITEM_AMOUNT:
      return state.map(item => {
        if (item.name === action.item) {
          return itemReducer(item, action);
        }
        return item;
      });

    case types.UPDATE_ITEM_IS_CHECKED:
      return state.map(item => {
        if (item.name === action.item) {
          return itemReducer(item, action);
        }
        return item;
      });

    case types.REMOVE_ITEM:
      return state.filter(item => item.name !== action.item);

    default:
      return state;
  }
};
