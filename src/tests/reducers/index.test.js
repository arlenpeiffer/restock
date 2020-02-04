import * as actions from 'actions';
import reducer from 'reducers';

// it('should initialize order state as empty array', () => {
//   expect(reducer()).toBe([]);
// });

describe('TOGGLE_IS_CHECKED', () => {
  describe('when isChecked is false', () => {
    it('should make isChecked true', () => {
      const state = [
        {
          name: 'Draft Latte Cans',
          items: [
            {
              amount: 1,
              isChecked: false,
              name: 'Original'
            }
          ]
        }
      ];

      const action = actions.TOGGLE_IS_CHECKED('Draft Latte Cans', 'Original');
      const actual = reducer(state, action);
      const expected = [
        {
          name: 'Draft Latte Cans',
          items: [
            {
              amount: 1,
              isChecked: true,
              name: 'Original'
            }
          ]
        }
      ];

      expect(actual).toEqual(expected);
    });
  });

  describe('when isChecked is true', () => {
    it('should make isChecked false', () => {
      const state = [
        {
          name: 'Draft Latte Cans',
          items: [
            {
              amount: 1,
              isChecked: true,
              name: 'Original'
            }
          ]
        }
      ];

      const action = actions.TOGGLE_IS_CHECKED('Draft Latte Cans', 'Original');
      const actual = reducer(state, action);
      const expected = [
        {
          name: 'Draft Latte Cans',
          items: [
            {
              amount: 1,
              isChecked: false,
              name: 'Original'
            }
          ]
        }
      ];

      expect(actual).toEqual(expected);
    });
  });
});

describe('INCREMENT_AMOUNT', () => {
  describe('when order state is empty', () => {
    const state = [];
    const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Original');
    const actual = reducer(state, action);

    test('order should have have length of 1', () => {
      expect(actual.length).toBe(1);
    });

    test('section.name should match action.section', () => {
      const name = actual[0].name;
      expect(name).toBe(action.section);
    });

    test('section.items should have length of 1', () => {
      const items = actual[0].items;
      expect(items.length).toBe(1);
    });

    test('item.amount should be 1', () => {
      const amount = actual[0].items[0].amount;
      expect(amount).toBe(1);
    });

    test('item.isChecked should be false', () => {
      const isChecked = actual[0].items[0].isChecked;
      expect(isChecked).toBeFalsy();
    });

    test('item.name should match action.item', () => {
      const name = actual[0].items[0].name;
      expect(name).toBe(action.item);
    });
  });

  describe('when section exists', () => {
    const state = [
      {
        items: [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          }
        ],
        name: 'Draft Latte Cans'
      }
    ];

    it('should not add new section', () => {
      const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Original');
      const actual = reducer(state, action);
      expect(actual).toHaveLength(1);
    });
  });

  describe('when section does not exist', () => {
    const state = [
      {
        items: [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          }
        ],
        name: 'Draft Latte Cans'
      }
    ];
    const action = actions.INCREMENT_AMOUNT('Retail Coffees', 'Corsica');
    const actual = reducer(state, action);

    test('order length should increase by 1', () => {
      expect(actual.length).toBe(2);
    });

    it('should add new section with name and items properties', () => {
      const newSection = actual[1];
      expect(newSection).toHaveProperty('name');
      expect(newSection).toHaveProperty('items');
    });

    // it('should add new section with name matching action.section', () => {
    //   const action = actions.INCREMENT_AMOUNT('Retail Coffees', 'Corsica');
    //   const actual = reducer(state, action);
    //   expect(actual[1].name).toBe(action.section);
    // });
  });
});
