import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import CounterButton from 'form/CounterButton';

const CounterContainer = styled.View`
  border: 0.5px solid darkgrey;
  border-radius: 3;
  flex-direction: row;
  margin-top: 10px;
`;

const CounterDisplay = styled.View`
  background-color: white;
  justify-content: center;
  width: 75px;
`;

const CounterDisplayText = styled.Text`
  font-size: 18;
  font-weight: 500;
  text-align: center;
`;

const Counter = ({ item, handleUpdateOrder }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    handleUpdateOrder(item, amount);
  }, [amount]);

  const increment = () => {
    setAmount(amount + 1);
  };

  const decrement = () => {
    amount && setAmount(amount - 1);
  };

  return (
    <CounterContainer>
      <CounterButton
        icon="minus"
        position="left"
        disabled={!amount}
        onPress={decrement}
      />
      <CounterDisplay>
        <CounterDisplayText>{amount}</CounterDisplayText>
      </CounterDisplay>
      <CounterButton icon="plus" position="right" onPress={increment} />
    </CounterContainer>
  );
};

export default Counter;
