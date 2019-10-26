import React, { useState } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import SectionItem from 'form/SectionItem';

const SectionContainer = styled.View`
  background-color: papayawhip;
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 100%;
`;

const SectionHeader = styled.View`
  background-color: wheat;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

const Section = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, items } = section;

  return (
    <SectionContainer>
      <SectionHeader>
        <Text>{name}</Text>
        <Text onPress={() => setIsExpanded(!isExpanded)}>+</Text>
      </SectionHeader>
      {isExpanded && items.map(item => <SectionItem key={item} item={item} />)}
    </SectionContainer>
  );
};

export default Section;
