import React, { useContext } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import { TOGGLE_IS_CHECKED } from 'actions';
import OrderContext from 'contexts/OrderContext';
import useValue from 'hooks/useValue';

const Icon = styled(Feather)`
  color: ${props => (props.isChecked ? 'green' : 'black')};
  margin: 0 10px;
`;

const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  margin-top: 7.5px;
`;

const Text = styled.Text`
  color: ${props => (props.isChecked ? 'lightgrey' : 'black')};
  font-size: 18;
  text-decoration: ${props => (props.isChecked ? 'line-through' : 'none')};
  text-decoration-color: lightgrey;
`;

const Item = ({ section, item }) => {
  const { dispatch } = useContext(OrderContext);
  const isChecked = useValue(section, item.name, 'isChecked');

  return (
    <ItemContainer
      onPress={() => dispatch(TOGGLE_IS_CHECKED(section, item.name))}
    >
      <Icon
        name={isChecked ? 'check' : 'square'}
        size={18}
        isChecked={isChecked}
      />
      <Text isChecked={isChecked}>
        {item.amount} {item.name}
      </Text>
    </ItemContainer>
  );
};

export default Item;
