import React from 'react';

import ScreenContainer from 'common/ScreenContainer';
import Section from 'form/Section';
import { inventory } from 'data/inventory';

const Form = () => {
  return (
    <ScreenContainer>
      {inventory.map(section => (
        <Section key={section.name} section={section} />
      ))}
    </ScreenContainer>
  );
};

export default Form;
