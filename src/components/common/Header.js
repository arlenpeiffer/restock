import React from 'react';
import styled from 'styled-components/native';
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
  font-weight: 700;
  letter-spacing: 1.5;
  margin-top: -15px;
  padding: 0 50px;
  text-transform: uppercase;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo source={logo} />
      <NavigationContainer>
        <NavigationItem>Form</NavigationItem>
        <NavigationItem>Checklist</NavigationItem>
      </NavigationContainer>
    </HeaderContainer>
  );
};

export default Header;
