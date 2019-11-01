import React from 'react';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import ChecklistItem from 'checklist/ChecklistItem';

const SectionContainer = styled.View`
  margin-top: 15px;
`;

const SectionLabel = styled.View`
  align-items: center;
  flex-direction: row;
`;

const SectionLabelBar = styled.View`
  background-color: ${colors.ORANGE_WHITE};
  flex-grow: 1;
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
        <ChecklistItem key={item.name} item={item} />
      ))}
    </SectionContainer>
  );
};

export default ChecklistSection;
