import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import CounterButton from 'form/CounterButton';

const CounterContainer = styled.View`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

const CounterDisplay = styled.Text`
  font-size: 16;
  font-weight: 500;
  padding: 10px;
  text-align: center;
  width: 50px;
`;

const Counter = ({ item, handleUpdateAmount }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    amount && handleUpdateAmount(item, amount);
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
      <CounterDisplay>{amount}</CounterDisplay>
      <CounterButton icon="plus" position="right" onPress={increment} />
    </CounterContainer>
  );
};

export default Counter;
