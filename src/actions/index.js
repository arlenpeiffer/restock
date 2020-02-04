import * as types from 'constants/types';

export const DECREMENT_AMOUNT = (section, item) => ({
  type: types.DECREMENT_AMOUNT,
  section,
  item
});

export const INCREMENT_AMOUNT = (section, item) => ({
  type: types.INCREMENT_AMOUNT,
  section,
  item
});

export const TOGGLE_IS_CHECKED = (section, item) => ({
  type: types.TOGGLE_IS_CHECKED,
  section,
  item
});
