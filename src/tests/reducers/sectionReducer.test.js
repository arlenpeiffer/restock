import * as actions from 'actions';
import sectionReducer from 'reducers/sectionReducer';

describe('sectionReducer', () => {
  const state = {
    items: [
      {
        amount: 1,
        isChecked: false,
        name: 'Genmaicha'
      },
      {
        amount: 1,
        isChecked: false,
        name: 'Hojicha'
      }
    ],
    name: 'Retail Teas'
  };

  const table = [
    [actions.DECREMENT_AMOUNT('Retail Teas', 'Hojicha')],
    [actions.INCREMENT_AMOUNT('Retail Teas', 'Hojicha')],
    [actions.TOGGLE_IS_CHECKED('Retail Teas', 'Hojicha')]
  ];

  test('should return state if action is not defined', () => {
    expect(sectionReducer(state, {})).toEqual(state);
  });

  test.each(table)('should return an object', action => {
    expect(sectionReducer(state, action)).toEqual(expect.any(Object));
  });

  test.each(table)('section should have an items property', action => {
    expect(sectionReducer(state, action)).toHaveProperty('items');
  });

  test.each(table)('section should have a name property', action => {
    expect(sectionReducer(state, action)).toHaveProperty('name');
  });

  test.each(table)('items should be an array', action => {
    expect(sectionReducer(state, action).items).toEqual(expect.any(Array));
  });

  test.each(table)('name should match state.name', action => {
    expect(sectionReducer(state, action).name).toBe(state.name);
  });

  test.each(table)('name should match action.section', action => {
    expect(sectionReducer(state, action).name).toBe(action.section);
  });
});
