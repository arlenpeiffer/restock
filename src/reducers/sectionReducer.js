import * as types from 'constants/types';
import itemsReducer from 'reducers/itemsReducer';

export default (state, action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    case types.TOGGLE_IS_CHECKED:
      return {
        name: state.name,
        items: itemsReducer(state.items, action)
      };

    default:
      return state;
  }
};
