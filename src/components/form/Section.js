import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import { colors } from 'constants/colors';
import SectionItem from 'form/SectionItem';

const SectionContainer = styled.View`
  background-color: ${colors.ORANGE_WHITE};
  margin: 5px;
  width: 100%;
`;

const SectionHeader = styled.View`
  align-items: center;
  background-color: ${colors.MIDNIGHT_BLUE};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

const SectionHeaderLabel = styled.Text`
  color: white;
  font-weight: 700;
  letter-spacing: 1.5;
  text-transform: uppercase;
`;

const SectionHeaderIcon = styled(Feather)`
  color: white;
`;

const Section = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, items } = section;

  return (
    <SectionContainer>
      <SectionHeader>
        <SectionHeaderLabel>{name}</SectionHeaderLabel>
        <SectionHeaderIcon
          name="plus"
          size={18}
          onPress={() => setIsExpanded(!isExpanded)}
        />
      </SectionHeader>
      {isExpanded &&
        items.map(item => (
          <SectionItem key={item} section={name} item={item} />
        ))}
    </SectionContainer>
  );
};

export default Section;
