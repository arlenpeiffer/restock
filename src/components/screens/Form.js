import React, { useContext } from 'react';
import { Button } from 'react-native';

import OrderContext from 'contexts/OrderContext';
import ScreenContainer from 'common/ScreenContainer';
import Section from 'form/Section';
import { inventory } from 'data/inventory';

const Form = props => {
  const { order } = useContext(OrderContext);
  console.log('Form', order);

  return (
    <ScreenContainer>
      {inventory.map(section => (
        <Section key={section.name} section={section} />
      ))}
      <Button
        title="Go to Checklist Screen"
        onPress={() => props.navigation.navigate('Checklist')}
      />
    </ScreenContainer>
  );
};

export default Form;
