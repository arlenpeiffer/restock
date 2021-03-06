import React from 'react';
import styled from 'styled-components/native';
import CounterButton from 'form/CounterButton';

const CounterContainer = styled.View`
  border: 0.5px solid darkgrey;
  border-radius: 3;
  flex-direction: row;
`;

const Display = styled.View`
  background-color: white;
  justify-content: center;
  width: 75px;
`;

const DisplayText = styled.Text`
  font-size: 18;
  font-weight: 500;
  text-align: center;
`;

const Counter = ({ amount, decrement, increment }) => {
  return (
    <CounterContainer>
      <CounterButton
        icon="minus"
        position="left"
        disabled={!amount}
        onPress={decrement}
      />
      <Display>
        <DisplayText>{amount}</DisplayText>
      </Display>
      <CounterButton icon="plus" position="right" onPress={increment} />
    </CounterContainer>
  );
};

export default Counter;
