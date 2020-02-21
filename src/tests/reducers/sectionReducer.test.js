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

  test.each(table)(
    'section should have items property whose value is an array',
    action => {
      const actual = sectionReducer(state, action);
      expect(actual).toHaveProperty('items', expect.any(Array));
    }
  );

  test.each(table)(
    'section should have name property whose value matches state.name',
    action => {
      const actual = sectionReducer(state, action);
      expect(actual).toHaveProperty('name', state.name);
    }
  );
});
