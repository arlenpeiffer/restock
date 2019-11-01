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

const SectionItem = ({ item, section }) => {
  const { order, handleUpdateOrder } = useContext(OrderContext);

  const initialState = (order[section] && order[section][item]) || 0;

  const [amount, setAmount] = useState(initialState);
  const [didMount, setDidMount] = useState(false);

  useEffect(() => {
    setDidMount(true);
    // add cleanup? //
  }, []);

  useEffect(() => {
    didMount && handleUpdateOrder(section, item, amount);
    // add cleanup? //
  }, [amount]);

  return (
    <SectionItemContainer>
      <Text>{item}:</Text>
      <Counter amount={amount} setAmount={setAmount} />
    </SectionItemContainer>
  );
};

export default SectionItem;
