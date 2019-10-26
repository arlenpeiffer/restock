import React from 'react';
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
  return (
    <AppContext.Provider value={[]}>
      <AppContainer />
    </AppContext.Provider>
  );
};

export default App;
