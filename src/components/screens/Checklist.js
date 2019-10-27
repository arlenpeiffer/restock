import React from 'react';
import { Text, Button } from 'react-native';
import ScreenContainer from 'common/ScreenContainer';

const Checklist = props => {
  return (
    <ScreenContainer>
      <Text>Checklist Screen</Text>
      <Button
        title="Go to Form Screen"
        onPress={() => props.navigation.navigate('Form')}
      />
    </ScreenContainer>
  );
};

export default Checklist;
