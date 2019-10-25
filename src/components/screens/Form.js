import React from 'react';
import { View, Text, Button } from 'react-native';

const Form = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Form Screen</Text>
      <Button
        title="Go to Checklist Screen"
        onPress={() => props.navigation.navigate('Checklist')}
      />
    </View>
  );
};

export default Form;
