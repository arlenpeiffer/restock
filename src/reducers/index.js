import * as types from 'constants/types';
import sectionReducer from 'reducers/sectionReducer';

export default (state, action) => {
  switch (action.type) {
    case types.ADD_SECTION:
      return [
        ...state,
        {
          name: action.section,
          items: [
            {
              name: action.item,
              amount: 1,
              isChecked: false
            }
          ]
        }
      ];

    case types.REMOVE_SECTION:
      return state.filter(section => section.name !== action.section);

    case types.ADD_ITEM:
      return state.map(section => {
        if (section.name === action.section) {
          return sectionReducer(section, action);
        }
        return section;
      });

    case types.UPDATE_ITEM:
      return state.map(section => {
        if (section.name === action.section) {
          return {
            ...section,
            items: section.items.map(item => {
              if (item.name === action.item) {
                return {
                  ...item,
                  amount: action.amount
                };
              } else {
                return item;
              }
            })
          };
        } else {
          return section;
        }
      });

    case types.UPDATE_ITEM_AMOUNT:
      return state.map(section => {
        if (section.name === action.section) {
          return sectionReducer(section, action);
        }
        return section;
      });

    case types.UPDATE_ITEM_IS_CHECKED:
      return state.map(section => {
        if (section.name === action.section) {
          return sectionReducer(section, action);
        }
        return section;
      });

    case types.REMOVE_ITEM:
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
