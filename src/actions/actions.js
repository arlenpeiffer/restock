import * as types from './types';

export const ADD_SECTION = (section, item, amount) => ({
  type: types.ADD_SECTION,
  section,
  item,
  amount
});

export const REMOVE_SECTION = section => ({
  type: types.REMOVE_SECTION,
  section
});

export const ADD_ITEM = (section, item, amount) => ({
  type: types.ADD_ITEM,
  section,
  item,
  amount
});

export const UPDATE_ITEM = (section, item, amount, isChecked) => ({
  type: types.UPDATE_ITEM,
  section,
  item,
  amount,
  isChecked
});

export const REMOVE_ITEM = (section, item) => ({
  type: types.REMOVE_ITEM,
  section,
  item
});
