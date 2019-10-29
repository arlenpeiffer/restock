import React from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

const CounterButtonContainer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${props => (props.disabled ? 'gainsboro' : 'lightgrey')};
  border-bottom-left-radius: ${props => (props.position === 'left' ? 3 : 0)};
  border-bottom-right-radius: ${props => (props.position === 'right' ? 3 : 0)};
  border-top-left-radius: ${props => (props.position === 'left' ? 3 : 0)};
  border-top-right-radius: ${props => (props.position === 'right' ? 3 : 0)};
  padding: 10px;
  width: 35px;
`;

const CounterButtonLabel = styled(Feather)`
  color: ${props => (props.disabled ? 'darkgrey' : 'black')};
`;

const CounterButton = ({ disabled, icon, onPress, position }) => {
  return (
    <CounterButtonContainer
      activeOpacity={disabled ? 1 : 0.9}
      disabled={disabled}
      onPress={onPress}
      position={position}
    >
      <CounterButtonLabel name={icon} size={18} disabled={disabled} />
    </CounterButtonContainer>
  );
};

export default CounterButton;
