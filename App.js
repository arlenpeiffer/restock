import React, { useReducer } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import * as actions from 'actions';
import Header from 'common/Header';
import OrderContext from 'contexts/OrderContext';
import reducer from 'reducers';
import Checklist from 'screens/Checklist';
import Form from 'screens/Form';

const AppNavigator = createStackNavigator(
  {
    Form: Form,
    Checklist: Checklist
  },
  {
    defaultNavigationOptions: {
      header: Header,
      headerLeft: null
    },
    initialRouteName: 'Form'
  }
);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
  const [order, dispatch] = useReducer(reducer, testInitialState);

  return (
    <OrderContext.Provider value={{ order, dispatch }}>
      <AppContainer />
    </OrderContext.Provider>
  );
};

export default App;
