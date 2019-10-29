import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';

const SectionItemContainer = styled.View`
  align-items: center;
  background-color: ${colors.SAFFRON};
  border: 1px solid ${colors.EGYPTIAN_BLUE};
  border-radius: 5;
  margin: 20px;
  padding: 20px;
`;

const SectionItem = ({ item }) => {
  const { handleUpdateAmount } = useContext(OrderContext);

  return (
    <SectionItemContainer>
      <Text>{item}:</Text>
      <Counter item={item} handleUpdateAmount={handleUpdateAmount} />
    </SectionItemContainer>
  );
};

export default SectionItem;
