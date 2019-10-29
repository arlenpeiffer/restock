import React from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

const CounterButtonContainer = styled.TouchableOpacity`
  background-color: ${props => (props.disabled ? 'gainsboro' : 'lightgrey')};
  border-bottom-left-radius: ${props => (props.position === 'left' ? 3 : 0)};
  border-bottom-right-radius: ${props => (props.position === 'right' ? 3 : 0)};
  border-top-left-radius: ${props => (props.position === 'left' ? 3 : 0)};
  border-top-right-radius: ${props => (props.position === 'right' ? 3 : 0)};
  justify-content: center;
`;

const CounterButtonLabel = styled(Feather)`
  color: ${props => (props.disabled ? 'darkgrey' : 'black')};
  margin: 10px;
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
