import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';
import useInitialValue from 'hooks/useInitialValue';
import useIsMounted from 'hooks/useIsMounted';

const SectionItemContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
  width: 154px;
`;

const SectionItemDivider = styled.View`
  background-color: ${colors.SAFFRON};
  height: 5px;
  margin-bottom: 10px;
  margin-top: 6.5px;
  width: 45px;
`;

const SectionItemLabel = styled.Text`
  font-weight: 800;
  padding-horizontal: 5px;
  text-align: center;
  text-transform: uppercase;
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
      <SectionItemLabel>{item}</SectionItemLabel>
      <SectionItemDivider />
      <Counter amount={amount} setAmount={setAmount} />
    </SectionItemContainer>
  );
};

export default SectionItem;
