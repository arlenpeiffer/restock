import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import OrderContext from 'contexts/OrderContext';

const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 7.5px;
`;

const ItemIcon = styled(Feather)`
  color: ${props => (props.isChecked ? 'green' : 'black')}
  margin: 0 10px;
`;

const ItemText = styled.Text`
  color: ${props => (props.isChecked ? 'lightgrey' : 'black')};
  font-size: 18;
  text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')};
  text-decoration-color: lightgrey;
`;

const ChecklistItem = ({ section, item }) => {
  const { order, handleUpdateOrder } = useContext(OrderContext);
  const { name, amount } = item;

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const setInitialValue = (order, section, item) => {
    let initialValue = false;
    order.some(s => {
      if (s.name === section) {
        s.items.some(i => {
          if (i.name === item) {
            initialValue = i.isChecked;
          }
        });
      }
    });
    return initialValue;
  };

  const initialValue = setInitialValue(order, section, name);
  const [isChecked, setIsChecked] = useState(initialValue);

  useEffect(() => {
    isMounted && handleUpdateOrder(section, name, amount, isChecked);
  }, [isChecked]);

  return (
    <ItemContainer onPress={() => setIsChecked(!isChecked)}>
      <ItemIcon
        name={isChecked ? 'check' : 'square'}
        size={18}
        isChecked={isChecked}
      />
      <ItemText isChecked={isChecked}>
        {amount} {name}
      </ItemText>
    </ItemContainer>
  );
};

export default ChecklistItem;
