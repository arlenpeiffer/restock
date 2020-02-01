import * as types from 'constants/types';
import itemsReducer from 'reducers/itemsReducer';

export default (state, action) => {
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    case types.UPDATE_ITEM_AMOUNT:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    case types.UPDATE_ITEM_IS_CHECKED:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    case types.REMOVE_ITEM:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    default:
      return state;
  }
};
