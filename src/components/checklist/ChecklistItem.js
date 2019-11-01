import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 7.5px;
`;

const ItemIcon = styled(Feather)`
  color: ${props => (props.isChecked ? 'green' : 'black')}
  margin: 0 10px;
`;

const ItemText = styled.Text`
  color: ${props => (props.isChecked ? 'lightgrey' : 'black')};
  font-size: 18;
  text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')};
  text-decoration-color: lightgrey;
`;

const ChecklistItem = ({ item }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { name, amount } = item;

  return (
    <ItemContainer onPress={() => setIsChecked(!isChecked)}>
      <ItemIcon
        name={isChecked ? 'check' : 'square'}
        size={18}
        isChecked={isChecked}
      />
      <ItemText isChecked={isChecked}>
        {amount} {name}
      </ItemText>
    </ItemContainer>
  );
};

export default ChecklistItem;
