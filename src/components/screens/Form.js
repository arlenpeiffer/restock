import React from 'react';
import { Text, Button } from 'react-native';
import Container from 'common/Container';

const Form = props => {
  return (
    <Container>
      <Text>Form Screen</Text>
      <Button
        title="Go to Checklist Screen"
        onPress={() => props.navigation.navigate('Checklist')}
      />
    </Container>
  );
};

export default Form;
