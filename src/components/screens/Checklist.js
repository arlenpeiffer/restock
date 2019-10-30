import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import OrderContext from 'contexts/OrderContext';
import ScreenContainer from 'common/ScreenContainer';

const Checklist = props => {
  const { order } = useContext(OrderContext);

  const createOrderArray = () => {
    let orderArray = [];

    Object.entries(order).map(([key, value]) => {
      orderArray.push({
        name: key,
        amount: value,
        isChecked: false
      });
    });

    return orderArray;
  };

  return (
    <ScreenContainer>
      <Text>Checklist Screen</Text>
      {createOrderArray().map(item => (
        <Text key={item.name}>
          {item.amount} {item.name}
        </Text>
      ))}
      <Button
        title="Go to Form Screen"
        onPress={() => props.navigation.navigate('Form')}
      />
    </ScreenContainer>
  );
};

export default Checklist;
