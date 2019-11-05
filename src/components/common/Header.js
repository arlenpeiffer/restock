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
  justify-content: space-between;
`;

const NavigationItem = styled.Text`
  color: ${colors.MIDNIGHT_BLUE};
  font-size: 16;
  font-weight: 700;
  letter-spacing: 1.5;
  margin-top: -15px;
  padding: 0 50px;
  text-transform: uppercase;
`;

const Header = props => {
  return (
    <HeaderContainer>
      <Logo source={logo} />
      <NavigationContainer>
        <NavigationItem onPress={() => props.navigation.navigate('Form')}>
          Form
        </NavigationItem>
        <NavigationItem onPress={() => props.navigation.navigate('Checklist')}>
          Checklist
        </NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
