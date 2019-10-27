import React from 'react';
import { Button } from 'react-native';

import OrderContext from 'contexts/OrderContext';
import Container from 'common/Container';
import Section from 'form/Section';
import { inventory } from 'data/inventory';

const Form = props => {
  return (
    <Container>
      {inventory.map(section => (
        <Section key={section.name} section={section} />
      ))}
      <Button
        title="Go to Checklist Screen"
        onPress={() => props.navigation.navigate('Checklist')}
      />
      <OrderContext.Consumer>
        {({ order }) => {
          console.log('Form', order);
        }}
      </OrderContext.Consumer>
    </Container>
  );
};

export default Form;
