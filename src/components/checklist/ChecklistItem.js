import React from 'react';
import { Text } from 'react-native';

const ChecklistItem = ({ item }) => {
  const { name, amount } = item;

  return (
    <Text>
      {amount} {name}
    </Text>
  );
};

export default ChecklistItem;
