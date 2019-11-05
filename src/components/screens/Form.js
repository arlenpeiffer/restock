import React from 'react';
import { SafeAreaView } from 'react-native';

import ScreenContainer from 'common/ScreenContainer';
import Section from 'form/Section';
import { inventory } from 'data/inventory';

const Form = () => {
  return (
    <SafeAreaView>
      <ScreenContainer>
        {inventory.map(section => (
          <Section key={section.name} section={section} />
        ))}
      </ScreenContainer>
    </SafeAreaView>
  );
};

export default Form;
