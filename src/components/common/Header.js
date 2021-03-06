import React from 'react';
import { StatusBar } from 'react-native';
import styled from 'styled-components/native';

import { colors } from 'constants/colors';
import headerLogo from 'images/logo-la-colombe.png';

const HeaderContainer = styled.View`
  align-items: center;
  background-color: ${colors.EGYPTIAN_BLUE};
  justify-content: center;
  padding: 20px 0;
`;

const Logo = styled.Image`
  height: 50px;
  margin-bottom: 15px;
  resize-mode: contain;
`;

const NavigationContainer = styled.View`
  flex-direction: row;
`;

const NavigationItem = styled.TouchableOpacity`
  border-bottom-color: ${props =>
    props.isSelected ? `${colors.SAFFRON}` : `${colors.EGYPTIAN_BLUE}`};
  border-bottom-width: 5px;
  margin: 0 25px;
  padding-bottom: 5px;
`;

const NavigationItemLabel = styled.Text`
  color: white;
  font-size: 16;
  font-weight: 700;
  letter-spacing: 1.5;
  text-transform: uppercase;
`;

const SafeAreaView = styled.SafeAreaView`
  background-color: ${colors.MIDNIGHT_BLUE};
`;

const Header = props => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      <HeaderContainer>
        <Logo source={headerLogo} />
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
    </SafeAreaView>
  );
};

export default Header;
