import React from 'react';
import { View, Text } from 'react-native';
import ChecklistItem from 'checklist/ChecklistItem';

const ChecklistSection = ({ section }) => {
  const { name, items } = section;

  return (
    <View>
      <Text>{name}</Text>
      {items.map(item => (
        <ChecklistItem key={item.name} item={item} />
      ))}
    </View>
  );
};

export default ChecklistSection;
