import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

const SectionItemContainer = styled.View`
  align-items: center;
  background-color: floralwhite;
  border: 1px solid wheat;
  border-radius: 5;
  display: flex;
  margin: 20px;
  padding: 20px;
`;

const SectionItem = ({ item }) => {
  const [count, setCount] = useState(0);

  return (
    <SectionItemContainer>
      <Text onPress={() => setCount(count + 1)}>
        {item}: {count}
      </Text>
    </SectionItemContainer>
  );
};

export default SectionItem;
