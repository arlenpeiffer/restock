import React from 'react';
import styled from 'styled-components/native';

import Item from 'checklist/Item';
import { colors } from 'constants/colors';

const Divider = styled.View`
  background-color: ${colors.ORANGE_WHITE};
  flex: 1;
  height: 1px;
`;

const Label = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SectionContainer = styled.View`
  margin-bottom: 15px;
  margin-horizontal: 10px;
`;

const Text = styled.Text`
  color: ${colors.ORANGE_WHITE};
  font-weight: 700;
  letter-spacing: 1.5;
  margin-right: 5px;
  text-transform: uppercase;
`;

const Section = ({ section }) => {
  const { name, items } = section;

  return (
    <SectionContainer>
      <Label>
        <Text>{name}</Text>
        <Divider />
      </Label>
      {items.map(item => (
        <Item key={item.name} section={name} item={item} />
      ))}
    </SectionContainer>
  );
};

export default Section;
