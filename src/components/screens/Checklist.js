import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, Text } from 'react-native';

import Section from 'checklist/Section';
import ScreenContainer from 'common/ScreenContainer';
import OrderContext from 'contexts/OrderContext';

const Checklist = () => {
  const { order } = useContext(OrderContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <ScreenContainer>
          {order.length > 0 ? (
            order.map(section => (
              <Section key={section.name} section={section} />
            ))
          ) : (
            <Text>You're all stocked up!</Text>
          )}
        </ScreenContainer>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Checklist;
