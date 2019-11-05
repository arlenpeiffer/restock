import React from 'react';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import logo from 'images/la-colombe-coffee-roasters-logo-vector.png';

const HeaderContainer = styled.View`
  align-items: center;
  background-color: white;
  justify-content: center;
  padding-bottom: 15px;
`;

const Logo = styled.Image`
  height: 100;
  resize-mode: contain;
`;

const NavigationContainer = styled.View`
  flex-direction: row;
  margin-top: -15px;
`;

const NavigationItem = styled.TouchableOpacity`
  border-bottom-color: ${props =>
    props.isSelected ? `${colors.SAFFRON}` : 'white'};
  border-bottom-width: 5px;
  margin: 0 25px;
  padding-bottom: 5px;
`;

const NavigationItemLabel = styled.Text`
  color: ${colors.MIDNIGHT_BLUE};
  font-size: 16;
  font-weight: 700;
  letter-spacing: 1.5;
  text-transform: uppercase;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <Logo source={logo} />
      <NavigationContainer>
        <NavigationItem
          activeOpacity={1}
          isSelected={props.navigation.state.index === 1}
          onPress={() => props.navigation.navigate('Checklist')}
        >
          <NavigationItemLabel>Checklist</NavigationItemLabel>
        </NavigationItem>
        <NavigationItem
          activeOpacity={1}
          isSelected={props.navigation.state.index === 0}
          onPress={() => props.navigation.navigate('Form')}
        >
          <NavigationItemLabel>Order Form</NavigationItemLabel>
        </NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
