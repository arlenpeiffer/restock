import * as actions from 'actions';
import itemReducer from 'reducers/itemReducer';

const setIsChecked = isChecked => ({
  amount: 2,
  isChecked,
  name: 'Hojicha'
});

describe('itemReducer', () => {
  describe('case ➡️ DECREMENT_AMOUNT', () => {
    describe('when isChecked is false', () => {
      const state = setIsChecked(false);

      test('amount should decrement by 1 and isChecked should be false', () => {
        const action = actions.DECREMENT_AMOUNT('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 1,
          isChecked: false,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when isChecked is true', () => {
      const state = setIsChecked(true);

      test('amount should decrement by 1 and isChecked should be true', () => {
        const action = actions.DECREMENT_AMOUNT('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 1,
          isChecked: true,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('case ➡️ INCREMENT_AMOUNT', () => {
    describe('when isChecked is false', () => {
      const state = setIsChecked(false);

      test('amount should increment by 1 and isChecked should be false', () => {
        const action = actions.INCREMENT_AMOUNT('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 3,
          isChecked: false,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when isChecked is true', () => {
      const state = setIsChecked(true);

      test('amount should increment by 1 and isChecked should be false', () => {
        const action = actions.INCREMENT_AMOUNT('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 3,
          isChecked: false,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('case ➡️ TOGGLE_IS_CHECKED', () => {
    describe('when isChecked is false', () => {
      const state = setIsChecked(false);

      test('isChecked should be true', () => {
        const action = actions.TOGGLE_IS_CHECKED('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 2,
          isChecked: true,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });

    describe('when isChecked is true', () => {
      const state = setIsChecked(true);

      test('isChecked should be false', () => {
        const action = actions.TOGGLE_IS_CHECKED('Retail Teas', 'Hojicha');
        const actual = itemReducer(state, action);
        const expected = {
          amount: 2,
          isChecked: false,
          name: 'Hojicha'
        };

        expect(actual).toEqual(expected);
      });
    });
  });
});
