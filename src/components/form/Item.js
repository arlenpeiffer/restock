import React, { useContext } from 'react';
import styled from 'styled-components/native';

import * as actions from 'actions';
import { colors } from 'constants/colors';
import OrderContext from 'contexts/OrderContext';
import Counter from 'form/Counter';
import useValue from 'hooks/useValue';

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
  const { dispatch } = useContext(OrderContext);
  const amount = useValue(section, item, 'amount');

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
