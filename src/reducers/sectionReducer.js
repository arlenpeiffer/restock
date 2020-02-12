import * as types from 'constants/types';
import itemsReducer from 'reducers/itemsReducer';

export default (state, action) => {
  switch (action.type) {
    case types.DECREMENT_AMOUNT:
    case types.INCREMENT_AMOUNT:
    case types.TOGGLE_IS_CHECKED:
      return {
        items: itemsReducer(state.items, action),
        name: state.name
      };

    default:
      return state;
  }
};
