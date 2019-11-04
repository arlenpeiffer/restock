import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import OrderContext from 'contexts/OrderContext';
import useInitialValue from 'hooks/useInitialValue';
import useIsMounted from 'hooks/useIsMounted';

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
  const { handleUpdateOrder } = useContext(OrderContext);

  const initialValue = useInitialValue('isChecked', false, section, item.name);
  const [isChecked, setIsChecked] = useState(initialValue);

  const isMounted = useIsMounted();

  useEffect(() => {
    isMounted && handleUpdateOrder(section, item.name, item.amount, isChecked);
  }, [isChecked]);

  return (
    <ItemContainer onPress={() => setIsChecked(!isChecked)}>
      <ItemIcon
        name={isChecked ? 'check' : 'square'}
        size={18}
        isChecked={isChecked}
      />
      <ItemText isChecked={isChecked}>
        {item.amount} {item.name}
      </ItemText>
    </ItemContainer>
  );
};

export default ChecklistItem;
