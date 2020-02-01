import * as actions from 'actions';
import reducer from 'reducers';

// it('should initialize order state as empty array', () => {
//   expect(reducer()).toBe([]);
// });

describe('ADD_SECTION', () => {
  describe('when order state is empty', () => {
    const state = [];

    it('should add a new section with item amount of 1', () => {
      const action = actions.ADD_SECTION('Draft Latte Cans', 'Original');
      const result = [
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
      expect(reducer(state, action)).toEqual(result);
    });

    it('should add a new section with item amount of 1', () => {
      const action = actions.ADD_SECTION('Retail Coffee', 'Corsica');
      const result = [
        {
          name: 'Retail Coffee',
          items: [
            {
              amount: 1,
              isChecked: false,
              name: 'Corsica'
            }
          ]
        }
      ];
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('when order state is not empty', () => {
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

    it('should add a new section with item amount of 1', () => {
      const action = actions.ADD_SECTION('Retail Coffee', 'Corsica');
      const result = [
        ...state,
        {
          name: 'Retail Coffee',
          items: [
            {
              amount: 1,
              isChecked: false,
              name: 'Corsica'
            }
          ]
        }
      ];
      expect(reducer(state, action)).toEqual(result);
    });
  });
});

describe('REMOVE_SECTION', () => {
  describe('when order state is empty', () => {
    const state = [];

    it('should return an empty array', () => {
      const action = actions.REMOVE_SECTION('Draft Latte Cans');
      expect(reducer(state, action)).toEqual([]);
    });
  });

  describe('when order state contains a single section', () => {
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
    it('should remove section and return an empty order state', () => {
      const action = actions.REMOVE_SECTION('Draft Latte Cans');
      const result = [];
      expect(reducer(state, action)).toEqual(result);
    });
  });

  describe('when order state contains more than a single section', () => {
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
      },
      {
        name: 'Retail Coffee',
        items: [
          {
            amount: 1,
            isChecked: false,
            name: 'Corsica'
          }
        ]
      }
    ];

    it('should remove given section', () => {
      const action = actions.REMOVE_SECTION('Draft Latte Cans');
      const result = [state[1]];
      expect(reducer(state, action)).toEqual(result);
    });

    it('should remove given section', () => {
      const action = actions.REMOVE_SECTION('Retail Coffee');
      const result = [state[0]];
      expect(reducer(state, action)).toEqual(result);
    });
  });
});

describe('ADD_ITEM', () => {
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

  it('should add item with amount of 1 to the correct section', () => {
    const action = actions.ADD_ITEM('Draft Latte Cans', 'Triple');
    const result = [
      {
        name: 'Draft Latte Cans',
        items: [
          {
            amount: 1,
            isChecked: false,
            name: 'Original'
          },
          {
            amount: 1,
            isChecked: false,
            name: 'Triple'
          }
        ]
      }
    ];
    expect(reducer(state, action)).toEqual(result);
  });
});

describe('REMOVE_ITEM', () => {
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

  it('should remove item from the correct section', () => {
    const action = actions.REMOVE_ITEM('Draft Latte Cans', 'Original');
    const actual = reducer(state, action);
    console.log(actual);
    const expected = [
      {
        name: 'Draft Latte Cans',
        items: []
      }
    ];

    expect(actual).toEqual(expected);
  });
});

describe('UPDATE_ITEM_AMOUNT', () => {
  it('should update the amount', () => {
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

    const action = actions.UPDATE_ITEM_AMOUNT(
      'Draft Latte Cans',
      'Original',
      2
    );
    const actual = reducer(state, action);
    const expected = [
      {
        name: 'Draft Latte Cans',
        items: [
          {
            amount: 2,
            isChecked: false,
            name: 'Original'
          }
        ]
      }
    ];

    expect(actual).toEqual(expected);
  });
});

describe('UPDATE_ITEM_IS_CHECKED', () => {
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

      const action = actions.UPDATE_ITEM_IS_CHECKED(
        'Draft Latte Cans',
        'Original'
      );
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

      const action = actions.UPDATE_ITEM_IS_CHECKED(
        'Draft Latte Cans',
        'Original'
      );
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
