import React from 'react';
import { Text, Button } from 'react-native';
import Container from 'common/Container';

const Checklist = props => {
  return (
    <Container>
      <Text>Checklist Screen</Text>
      <Button
        title="Go to Form Screen"
        onPress={() => props.navigation.navigate('Form')}
      />
    </Container>
  );
};

export default Checklist;
