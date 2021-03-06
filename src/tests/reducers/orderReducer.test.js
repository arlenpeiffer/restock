import * as actions from 'actions';
import orderReducer from 'reducers/orderReducer';

describe('INCREMENT_AMOUNT', () => {
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
    },
    {
      items: [
        {
          amount: 1,
          isChecked: true,
          name: 'Corsica'
        }
      ],
      name: 'Retail Coffees'
    }
  ];

  describe('when section exists..', () => {
    const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Triple');
    const actual = orderReducer(state, action);

    test('section should not be added to order', () => {
      expect(actual).toHaveLength(2);
    });

    test('each section should have a name property', () => {
      state.map(section => {
        expect(section).toHaveProperty('name');
      });
    });

    test('each section should have an items property', () => {
      state.map(section => {
        expect(section).toHaveProperty('items');
      });
    });

    describe('but item does not exist', () => {
      const action = actions.INCREMENT_AMOUNT('Draft Latte Cans', 'Triple');
      const actual = orderReducer(state, action);

      test('item should be added to section', () => {
        expect(actual[0].items).toHaveLength(2);
      });

      test('item amount should be 1', () => {
        expect(actual[0].items[1]).toHaveProperty('amount', 1);
      });

      test('item isChecked state should be false', () => {
        expect(actual[0].items[1]).toHaveProperty('isChecked', false);
      });

      test('item name should match value of action.item', () => {
        expect(actual[0].items[1]).toHaveProperty('name', action.item);
      });
    });

    describe('and item exists', () => {
      const action = actions.INCREMENT_AMOUNT('Retail Coffees', 'Corsica');
      const actual = orderReducer(state, action);

      test('item should not be added to section', () => {
        expect(actual[1].items).toHaveLength(1);
      });

      test('item amount should increment by 1', () => {
        expect(actual[1].items[0].amount).toBe(2);
      });

      test('item isChecked should reset to false', () => {
        expect(actual[1].items[0].isChecked).toBe(false);
      });
    });
  });

  describe('when section does not exist', () => {
    const action = actions.INCREMENT_AMOUNT('Retail Teas', 'Genmaicha');
    const actual = orderReducer(state, action);

    test('section should be added to order', () => {
      expect(actual).toHaveLength(3);
    });

    test('each section should have a name property', () => {
      state.map(section => {
        expect(section).toHaveProperty('name');
      });
    });

    test('each section should have an items property', () => {
      state.map(section => {
        expect(section).toHaveProperty('items');
      });
    });

    test('item should be added to section', () => {
      expect(actual[2].items).toHaveLength(1);
    });

    test('item amount should be 1', () => {
      expect(actual[2].items[0]).toHaveProperty('amount', 1);
    });

    test('item isChecked state should be false', () => {
      expect(actual[2].items[0]).toHaveProperty('isChecked', false);
    });

    test('item name should match value of action.item', () => {
      expect(actual[2].items[0]).toHaveProperty('name', action.item);
    });
  });
});

describe('DECREMENT_AMOUNT', () => {
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
    },
    {
      items: [
        {
          amount: 1,
          isChecked: true,
          name: 'Corsica'
        },
        {
          amount: 2,
          isChecked: false,
          name: 'Nizza'
        }
      ],
      name: 'Retail Coffees'
    }
  ];

  describe('when item has an amount of 1..', () => {
    describe('and is the last item in a section', () => {
      const action = actions.DECREMENT_AMOUNT('Draft Latte Cans', 'Original');
      const actual = orderReducer(state, action);

      test('section should be removed from order', () => {
        expect(actual).toHaveLength(1);
        // expect(actual).not.toContain(
        //   expect.objectContaining({ name: 'Draft Latte Cans' })
        // );
      });
    });

    describe('and is not the last item in a section', () => {
      const action = actions.DECREMENT_AMOUNT('Retail Coffees', 'Corsica');
      const actual = orderReducer(state, action);

      test('item should be removed from section', () => {
        expect(actual[1].items).toHaveLength(1);
        // expect(actual[1]).toHaveProperty('name', 'Retail Coffees');
      });
    });
  });

  describe('when item has an amount greater than 1', () => {
    const action = actions.DECREMENT_AMOUNT('Retail Coffees', 'Nizza');
    const actual = orderReducer(state, action);

    test('item amount should decrement by 1', () => {
      expect(actual[1].items[1].amount).toBe(1);
    });
  });
});

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
      const actual = orderReducer(state, action);
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
      const actual = orderReducer(state, action);
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
