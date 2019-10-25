import React from 'react';
import { View, Text, Button } from 'react-native';

const Checklist = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Checklist Screen</Text>
      <Button
        title="Go to Form Screen"
        onPress={() => props.navigation.navigate('Form')}
      />
    </View>
  );
};

export default Checklist;
