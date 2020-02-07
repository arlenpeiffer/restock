import React, { useContext } from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import Section from 'checklist/Section';
import ScreenContainer from 'common/ScreenContainer';
import OrderContext from 'contexts/OrderContext';

const EmptyPrompt = styled.View`
  flex: 1;
  justify-content: center;
  margin-horizontal: 15%;
`;

const Text = styled.Text`
  font-size: 18;
  text-align: center;
`;

const Checklist = () => {
  const { order } = useContext(OrderContext);
  const orderContainsItems = order.length > 0;

  return orderContainsItems ? (
    <SafeAreaView>
      <ScrollView>
        <ScreenContainer>
          {order.map(section => (
            <Section key={section.name} section={section} />
          ))}
        </ScreenContainer>
      </ScrollView>
    </SafeAreaView>
  ) : (
    <EmptyPrompt>
      <Text>
        Add a few items to your Checklist using the Order Form. They'll show up
        here ☕
      </Text>
    </EmptyPrompt>
  );
};

export default Checklist;
