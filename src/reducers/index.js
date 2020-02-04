import * as types from 'constants/types';
import sectionReducer from 'reducers/sectionReducer';

export default (state, action) => {
  switch (action.type) {
    case types.INCREMENT_AMOUNT:
      const sectionExists = state.find(
        section => section.name === action.section
      );

      const sectionInit = {
        name: action.section,
        items: []
      };

      if (sectionExists) {
        return state.map(section => {
          if (section.name === action.section) {
            return sectionReducer(section, action);
          }
          return section;
        });
      }
      return [...state, sectionReducer(sectionInit, action)];

    case types.TOGGLE_IS_CHECKED:
      return state.map(section => {
        if (section.name === action.section) {
          return sectionReducer(section, action);
        }
        return section;
      });

    default:
      return state;
  }
};
