import React, { useState } from 'react';
import styled from 'styled-components/native';
import { Feather } from 'icons';

import { colors } from 'constants/colors';
import Item from 'form/Item';

const ExpandedView = styled.View`
  background-color: ${colors.ORANGE_WHITE};
`;

const Footer = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.EGYPTIAN_BLUE};
  margin-top: 15px;
  padding: 15px;
`;

const Header = styled.TouchableOpacity`
  align-items: center;
  background-color: ${colors.MIDNIGHT_BLUE};
  flex-direction: row;
  justify-content: space-between;
  padding: 25px;
`;

const Icon = styled(Feather)`
  color: white;
`;

const ItemsContainer = styled.View`
  align-items: center;
`;

const Label = styled.Text`
  color: white;
  font-weight: 700;
  letter-spacing: 1.5;
  text-transform: uppercase;
`;

const SectionContainer = styled.View`
  margin-bottom: 10px;
`;

const Section = ({ section }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { name, items } = section;

  return (
    <SectionContainer>
      <Header activeOpacity={1} onPress={() => setIsExpanded(!isExpanded)}>
        <Label>{name}</Label>
        <Icon name={isExpanded ? 'chevron-down' : 'plus'} size={18} />
      </Header>
      {isExpanded && (
        <ExpandedView>
          <ItemsContainer>
            {items.map(item => (
              <Item key={item} section={name} item={item} />
            ))}
          </ItemsContainer>
          <Footer activeOpacity={1} onPress={() => setIsExpanded(!isExpanded)}>
            <Label>Close</Label>
          </Footer>
        </ExpandedView>
      )}
    </SectionContainer>
  );
};

export default Section;
