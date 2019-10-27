import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';

const SectionItemContainer = styled.View`
  align-items: center;
  background-color: floralwhite;
  border: 1px solid wheat;
  border-radius: 5;
  display: flex;
  margin: 20px;
  padding: 20px;
`;

const SectionItem = ({ item }) => {
  const { handleUpdateAmount } = useContext(OrderContext);

  return (
    <SectionItemContainer>
      <View>
        <Text>{item}:</Text>
        <Counter item={item} handleUpdateAmount={handleUpdateAmount} />
      </View>
    </SectionItemContainer>
  );
};

export default SectionItem;
