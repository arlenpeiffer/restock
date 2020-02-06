import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';

import * as actions from 'actions';
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
  const { order, dispatch } = useContext(OrderContext);

  // const initialValue = useInitialValue('amount', 0, section, item);
  // const [amount, setAmount] = useState(initialValue());

  // const isMounted = useIsMounted();

  // useEffect(() => {
  //   isMounted && dispatch(actions.INCREMENT_AMOUNT(section, item));
  // }, [amount]);

  const initialValue = () => {
    const sectionExists = order.find(({ name }) => name === section);
    const itemExists =
      sectionExists && sectionExists.items.find(({ name }) => name === item);
    return itemExists ? itemExists.amount : 0;
  };

  const amount = initialValue();

  return (
    <ItemContainer>
      <Label>{item}</Label>
      <Divider />
      <Counter
        amount={amount}
        decrement={() => dispatch(actions.DECREMENT_AMOUNT(section, item))}
        increment={() => dispatch(actions.INCREMENT_AMOUNT(section, item))}
      />
    </ItemContainer>
  );
};

export default Item;
