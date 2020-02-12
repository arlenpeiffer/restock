import * as actions from 'actions';
import itemsReducer from 'reducers/itemsReducer';

describe('itemsReducer', () => {
  const state = [
    {
      amount: 1,
      isChecked: false,
      name: 'Original'
    },
    {
      amount: 2,
      isChecked: true,
      name: 'Triple'
    },
    {
      amount: 1,
      isChecked: true,
      name: 'Vanilla'
    }
  ];

  describe('case ➡️ DECREMENT_AMOUNT', () => {
    describe('when item amount is 1', () => {
      test('returned state should not include item', () => {
        const action = actions.DECREMENT_AMOUNT('Draft Latte Cans', 'Original');
        const actual = itemsReducer(state, action);
        const expected = [
          {
            amount: 2,
            isChecked: true,
            name: 'Triple'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Vanilla'
          }
        ];

        expect(actual).toEqual(expected);
      });

      test('returned state should be empty if last item was just decremented', () => {
        const state = [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          }
        ];
        const action = actions.DECREMENT_AMOUNT('Draft Latte Cans', 'Original');
        const actual = itemsReducer(state, action);
        const expected = [];

        expect(actual).toEqual(expected);
      });
    });

    describe('when item amount is greater than 1', () => {
      test('returned state should include item with its amount decremented by 1', () => {
        const action = actions.DECREMENT_AMOUNT('Draft Latte Cans', 'Triple');
        const actual = itemsReducer(state, action);
        const expected = [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Triple'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Vanilla'
          }
        ];

        expect(actual).toEqual(expected);
      });
    });
  });

  describe('case ➡️ INCREMENT_AMOUNT', () => {
    describe('when item is not present', () => {
      test('returned state should include item', () => {
        const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Mocha');
        const actual = itemsReducer(state, action);
        const expected = [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          },
          {
            amount: 2,
            isChecked: true,
            name: 'Triple'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Vanilla'
          },
          {
            amount: 1,
            isChecked: false,
            name: 'Mocha'
          }
        ];

        expect(actual).toEqual(expected);
      });
    });

    describe('when item is present', () => {
      describe('and isChecked is false', () => {
        test('returned state should include item with its amount incremented by 1', () => {
          const action = actions.INCREMENT_AMOUNT(
            'Draft Latte Cans',
            'Original'
          );
          const actual = itemsReducer(state, action);
          const expected = [
            {
              amount: 2,
              isChecked: false,
              name: 'Original'
            },
            {
              amount: 2,
              isChecked: true,
              name: 'Triple'
            },
            {
              amount: 1,
              isChecked: true,
              name: 'Vanilla'
            }
          ];

          expect(actual).toEqual(expected);
        });
      });

      describe('and isChecked is true', () => {
        test('returned state should include item with its amount incremented and isChecked reset', () => {
          const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Triple');
          const actual = itemsReducer(state, action);
          const expected = [
            {
              amount: 1,
              isChecked: false,
              name: 'Original'
            },
            {
              amount: 3,
              isChecked: false,
              name: 'Triple'
            },
            {
              amount: 1,
              isChecked: true,
              name: 'Vanilla'
            }
          ];

          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe('case ➡️ TOGGLE_IS_CHECKED', () => {
    describe('when item isChecked is false', () => {
      test('returned state should include item with isChecked set to true', () => {
        const action = actions.TOGGLE_IS_CHECKED(
          'Draft Latte Cans',
          'Original'
        );
        const actual = itemsReducer(state, action);
        const expected = [
          {
            amount: 1,
            isChecked: true,
            name: 'Original'
          },
          {
            amount: 2,
            isChecked: true,
            name: 'Triple'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Vanilla'
          }
        ];

        expect(actual).toEqual(expected);
      });
    });

    describe('when item isChecked is true', () => {
      test('returned state should include item with isChecked set to false', () => {
        const action = actions.TOGGLE_IS_CHECKED('Draft Latte Cans', 'Triple');
        const actual = itemsReducer(state, action);
        const expected = [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          },
          {
            amount: 2,
            isChecked: false,
            name: 'Triple'
          },
          {
            amount: 1,
            isChecked: true,
            name: 'Vanilla'
          }
        ];

        expect(actual).toEqual(expected);
      });
    });
  });
});
