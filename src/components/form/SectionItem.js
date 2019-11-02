import React, { useContext, useEffect, useState } from 'react';
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

const SectionItem = ({ section, item }) => {
  const { order, handleUpdateOrder } = useContext(OrderContext);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const [amount, setAmount] = useState(0);

  useEffect(() => {
    isMounted && handleUpdateOrder(section, item, amount);
  }, [amount]);

  return (
    <SectionItemContainer>
      <Text>{item}:</Text>
      <Counter amount={amount} setAmount={setAmount} />
    </SectionItemContainer>
  );
};

export default SectionItem;
