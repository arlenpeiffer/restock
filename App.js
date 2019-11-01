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
  console.log('order = ', order);

  const handleUpdateOrder = (section, item, amount) => {
    // DOES SECTION KEY EXIST? //
    if (Object.keys(order).includes(section)) {
      // YES: IS AMOUNT > 0? //
      if (amount) {
        // YES: ADD ITEM KEY! //
        setOrder({
          ...order,
          [section]: {
            ...order[section],
            [item]: amount
          }
        });
      } else {
        // NO: IS THIS THE LAST ITEM IN THE SECTION? //
        if (Object.keys(order[section]).length === 1) {
          // YES: REMOVE SECTION KEY! //
          const { [section]: undefined, ...orderSansSection } = order;
          setOrder(orderSansSection);
        } else {
          // NO: REMOVE ITEM KEY! //
          const { [item]: undefined, ...sectionSansItem } = order[section];
          setOrder({
            ...order,
            [section]: sectionSansItem
          });
        }
      }
    } else {
      // NO: ADD SECTION KEY! //
      setOrder({
        ...order,
        [section]: {
          [item]: amount
        }
      });
    }
  };

  return (
    <OrderContext.Provider value={{ order, handleUpdateOrder }}>
      <AppContainer />
    </OrderContext.Provider>
  );
};

export default App;
