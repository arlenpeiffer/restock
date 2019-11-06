import React from 'react';
import styled from 'styled-components/native';

import ChecklistItem from 'checklist/ChecklistItem';
import { colors } from 'constants/colors';

const SectionContainer = styled.View`
  margin-bottom: 15px;
  margin-horizontal: 10px;
`;

const SectionLabel = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SectionLabelBar = styled.View`
  background-color: ${colors.ORANGE_WHITE};
  flex: 1;
  height: 1px;
`;

const SectionLabelText = styled.Text`
  color: ${colors.ORANGE_WHITE};
  font-weight: 700;
  letter-spacing: 1.5;
  margin-right: 5px;
  text-transform: uppercase;
`;

const ChecklistSection = ({ section }) => {
  const { name, items } = section;

  return (
    <SectionContainer>
      <SectionLabel>
        <SectionLabelText>{name}</SectionLabelText>
        <SectionLabelBar />
      </SectionLabel>
      {items.map(item => (
        <ChecklistItem key={item.name} section={name} item={item} />
      ))}
    </SectionContainer>
  );
};

export default ChecklistSection;
