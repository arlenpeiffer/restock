import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import { colors } from 'constants/colors';
import SectionItem from 'form/SectionItem';

const SectionContainer = styled.View`
  margin-bottom: 10px;
`;

const SectionFooter = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.EGYPTIAN_BLUE};
  margin-top: 15px;
  padding: 15px;
`;

const SectionFooterLabel = styled.Text`
  color: white;
  font-weight: 700;
  letter-spacing: 1.5;
  text-transform: uppercase;
`;

const SectionHeader = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.MIDNIGHT_BLUE};
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

const ExpandedView = styled.View`
  background-color: ${colors.ORANGE_WHITE};
`;

const Section = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, items } = section;

  return (
    <SectionContainer>
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
      {isExpanded && (
        <ExpandedView>
          <SectionItemsContainer>
            {items.map(item => (
              <SectionItem key={item} section={name} item={item} />
            ))}
          </SectionItemsContainer>
          <SectionFooter
            activeOpacity={1}
            onPress={() => setIsExpanded(!isExpanded)}
          >
            <SectionFooterLabel>Close</SectionFooterLabel>
          </SectionFooter>
        </ExpandedView>
      )}
    </SectionContainer>
  );
};

export default Section;
