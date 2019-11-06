import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';

import ScreenContainer from 'common/ScreenContainer';
import { inventory } from 'data/inventory';
import Section from 'form/Section';

const Form = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <ScreenContainer>
          {inventory.map(section => (
            <Section key={section.name} section={section} />
          ))}
        </ScreenContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Form;
