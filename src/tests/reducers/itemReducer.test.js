import * as actions from 'actions';
import itemReducer from 'reducers/itemReducer';

describe('itemReducer', () => {
  const state = {
    amount: 2,
    isChecked: false,
    name: 'Hojicha'
  };

  const table = [
    [actions.DECREMENT_AMOUNT('Retails Teas', 'Hojicha')],
    [actions.INCREMENT_AMOUNT('Retails Teas', 'Hojicha')],
    [actions.TOGGLE_IS_CHECKED('Retails Teas', 'Hojicha')]
  ];

  test('should return state if action is not defined', () => {
    expect(itemReducer(state, {})).toEqual(state);
  });

  test.each(table)('should return an object', action => {
    expect(itemReducer(state, action)).toEqual(expect.any(Object));
  });

  test.each(table)('item should have an amount property', action => {
    expect(itemReducer(state, action)).toHaveProperty('amount');
  });

  test.each(table)('item should have an isChecked property', action => {
    expect(itemReducer(state, action)).toHaveProperty('isChecked');
  });

  test.each(table)('item should have a name property', action => {
    expect(itemReducer(state, action)).toHaveProperty('name');
  });

  test.each(table)('name should match state.name', action => {
    expect(itemReducer(state, action).name).toBe(state.name);
  });

  test.each(table)('name should match action.item', action => {
    expect(itemReducer(state, action).name).toBe(action.item);
  });

  describe('case ➡️ DECREMENT_AMOUNT', () => {
    const action = table[0][0];
    const actual = itemReducer(state, action);

    test('amount should be 1 less than state.amount', () => {
      expect(actual.amount).toBe(state.amount - 1);
    });

    test('isChecked should match state.isChecked', () => {
      expect(actual.isChecked).toBe(state.isChecked);
    });
  });

  describe('case ➡️ INCREMENT_AMOUNT', () => {
    const action = table[1][0];
    const actual = itemReducer(state, action);

    test('amount should be 1 greater than state.amount', () => {
      expect(actual.amount).toBe(state.amount + 1);
    });

    test('isChecked should be false', () => {
      expect(actual.isChecked).toBe(false);
    });
  });

  describe('case ➡️ TOGGLE_IS_CHECKED', () => {
    const action = table[2][0];
    const actual = itemReducer(state, action);

    test('amount should match state.amount', () => {
      expect(actual.amount).toBe(state.amount);
    });

    test('isChecked should be the opposite of state.isChecked', () => {
      expect(actual.isChecked).toBe(!state.isChecked);
    });
  });
});
