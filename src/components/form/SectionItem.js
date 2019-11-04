import React, { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';
import useInitialValue from 'hooks/useInitialValue';
import useIsMounted from 'hooks/useIsMounted';

const SectionItemContainer = styled.View`
  align-items: center;
  background-color: ${colors.SAFFRON};
  border: 1px solid ${colors.EGYPTIAN_BLUE};
  border-radius: 5;
  margin: 20px;
  padding: 20px;
`;

const SectionItem = ({ section, item }) => {
  const { handleUpdateOrder } = useContext(OrderContext);

  const initialValue = useInitialValue('amount', 0, section, item);
  const [amount, setAmount] = useState(initialValue);

  const isMounted = useIsMounted();

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
