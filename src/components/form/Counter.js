import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const Counter = ({ item, handleUpdateAmount }) => {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    amount && handleUpdateAmount(item, amount);
  }, [amount]);

  const incrementAmount = () => {
    setAmount(amount + 1);
  };

  return (
    <View>
      <Text onPress={incrementAmount}>{amount}</Text>
    </View>
  );
};

export default Counter;
