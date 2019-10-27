import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import OrderContext from 'contexts/OrderContext';
import Form from 'screens/Form';
import Checklist from 'screens/Checklist';

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
  const [order, setOrder] = useState({});

  const handleUpdateAmount = (item, amount) => {
    setOrder({
      ...order,
      [item]: amount
    });
  };

  return (
    <OrderContext.Provider value={{ order, handleUpdateAmount }}>
      <AppContainer />
    </OrderContext.Provider>
  );
};

export default App;
