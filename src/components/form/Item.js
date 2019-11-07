import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';
import useInitialValue from 'hooks/useInitialValue';
import useIsMounted from 'hooks/useIsMounted';

const Divider = styled.View`
  background-color: ${colors.SAFFRON};
  height: 5px;
  margin-bottom: 10px;
  margin-top: 6.5px;
  width: 45px;
`;

const ItemContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
  margin-top: 15px;
  width: 154px;
`;

const Label = styled.Text`
  font-weight: 800;
  padding-horizontal: 5px;
  text-align: center;
  text-transform: uppercase;
`;

const Item = ({ section, item }) => {
  const { handleUpdateOrder } = useContext(OrderContext);

  const initialValue = useInitialValue('amount', 0, section, item);
  const [amount, setAmount] = useState(initialValue);

  const isMounted = useIsMounted();

  useEffect(() => {
    isMounted && handleUpdateOrder(section, item, amount);
  }, [amount]);

  return (
    <ItemContainer>
      <Label>{item}</Label>
      <Divider />
      <Counter amount={amount} setAmount={setAmount} />
    </ItemContainer>
  );
};

export default Item;
