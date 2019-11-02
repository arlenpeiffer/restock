import React, { useReducer } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import OrderContext from 'contexts/OrderContext';
import Form from 'screens/Form';
import Checklist from 'screens/Checklist';

import * as actions from './src/actions/actions';
import { reducer } from './src/reducers/reducer';

const AppNavigator = createStackNavigator(
  {
    Form: Form,
    Checklist: Checklist
  },
  {
    initialRouteName: 'Form'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [order, dispatch] = useReducer(reducer, []);
  console.log('order = ', order);

  const handleUpdateOrder = (section, item, amount, isChecked) => {
    // DOES SECTION EXIST? //
    if (order.some(sect => sect.name === section)) {
      // YES: IS AMOUNT > 0? //
      if (amount) {
        // YES: DOES ITEM EXIST? //
        const items = order.find(({ name }) => name === section).items;
        if (items.find(({ name }) => name === item)) {
          // YES: UPDATE ITEM! //
          dispatch(actions.UPDATE_ITEM(section, item, amount, isChecked));
        } else {
          // NO: ADD ITEM! //
          dispatch(actions.ADD_ITEM(section, item, amount));
        }
      } else {
        // NO: IS THIS THE LAST ITEM IN THE SECTION? //
        const items = order.find(({ name }) => name === section).items;
        if (items.length === 1) {
          // YES: REMOVE SECTION! //
          dispatch(actions.REMOVE_SECTION(section));
        } else {
          // NO: REMOVE ITEM! //
          dispatch(actions.REMOVE_ITEM(section, item));
        }
      }
    } else {
      // NO: ADD SECTION KEY! //
      dispatch(actions.ADD_SECTION(section, item, amount));
    }
  };

  return (
    <OrderContext.Provider value={{ order, handleUpdateOrder }}>
      <AppContainer />
    </OrderContext.Provider>
  );
};

export default App;
