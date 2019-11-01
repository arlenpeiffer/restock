import React from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 7.5px;
`;

const ItemIcon = styled(Feather)`
  margin: 0 10px;
`;

const ItemText = styled.Text`
  font-size: 18;
`;

const ChecklistItem = ({ item }) => {
  const { name, amount } = item;

  return (
    <ItemContainer>
      <ItemIcon name="square" size={18} />
      <ItemText>
        {amount} {name}
      </ItemText>
    </ItemContainer>
  );
};

export default ChecklistItem;
