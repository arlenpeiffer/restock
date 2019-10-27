import React, { useState } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import AppContext from 'contexts/AppContext';
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
    <AppContext.Provider value={{ order, handleUpdateAmount }}>
      <AppContainer />
    </AppContext.Provider>
  );
};

export default App;
