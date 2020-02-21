import * as types from 'constants/types';
import sectionReducer from 'reducers/sectionReducer';

export default (state, action) => {
  const newSection = {
    items: [],
    name: action.section
  };

  const sectionExists = state.find(section => section.name === action.section);

  const stateWithSectionReduced = state.map(section =>
    section.name === action.section ? sectionReducer(section, action) : section
  );

  switch (action.type) {
    case types.DECREMENT_AMOUNT:
      return stateWithSectionReduced.filter(
        section => section.items.length > 0
      );

    case types.INCREMENT_AMOUNT:
      return sectionExists
        ? stateWithSectionReduced
        : [...state, sectionReducer(newSection, action)];

    case types.TOGGLE_IS_CHECKED:
      return stateWithSectionReduced;

    default:
      return state;
  }
};
