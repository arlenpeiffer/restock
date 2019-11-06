import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import { colors } from 'constants/colors';
import SectionItem from 'form/SectionItem';

const SectionContainer = styled.View`
  background-color: ${colors.ORANGE_WHITE};
  flex: 1;
  margin-bottom: 10px;
  padding-bottom: ${props => (props.isExpanded ? '15px' : '0px')};
`;

const SectionHeader = styled.TouchableOpacity`
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

const SectionItemsContainer = styled.View`
  align-items: center;
`;

const Section = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, items } = section;

  return (
    <SectionContainer isExpanded={isExpanded}>
      <SectionHeader
        activeOpacity={1}
        onPress={() => setIsExpanded(!isExpanded)}
      >
        <SectionHeaderLabel>{name}</SectionHeaderLabel>
        <SectionHeaderIcon
          name={isExpanded ? 'chevron-down' : 'plus'}
          size={18}
        />
      </SectionHeader>
      <SectionItemsContainer>
        {isExpanded &&
          items.map(item => (
            <SectionItem key={item} section={name} item={item} />
          ))}
      </SectionItemsContainer>
    </SectionContainer>
  );
};

export default Section;
