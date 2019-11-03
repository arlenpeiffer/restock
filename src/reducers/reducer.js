import * as types from '../actions/types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.ADD_SECTION:
      return [
        ...state,
        {
          name: action.section,
          items: [
            {
              name: action.item,
              amount: action.amount,
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
          return {
            ...section,
            items: [
              ...section.items,
              {
                name: action.item,
                amount: action.amount,
                isChecked: false
              }
            ]
          };
        } else {
          return section;
        }
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
                  amount: action.amount,
                  isChecked: action.isChecked
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

    case types.REMOVE_ITEM:
      return state.map(section => {
        if (section.name === action.section) {
          return {
            ...section,
            items: section.items.filter(item => item.name !== action.item)
          };
        } else {
          return section;
        }
      });

    default:
      return state;
  }
};
