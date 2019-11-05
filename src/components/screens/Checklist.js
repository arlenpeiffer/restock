import React, { useContext } from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import OrderContext from 'contexts/OrderContext';
import ChecklistSection from 'checklist/ChecklistSection';

const ScreenContainer = styled.ScrollView`
  margin: 0 20px;
`;

const Checklist = () => {
  const { order } = useContext(OrderContext);

  return (
    <ScreenContainer>
      {order.length > 0 ? (
        order.map(section => (
          <ChecklistSection key={section.name} section={section} />
        ))
      ) : (
        <Text>You're all stocked up!</Text>
      )}
    </ScreenContainer>
  );
};

export default Checklist;
