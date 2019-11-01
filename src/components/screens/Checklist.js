import React, { useContext } from 'react';
import { Text, Button } from 'react-native';

import OrderContext from 'contexts/OrderContext';
import ScreenContainer from 'common/ScreenContainer';
import ChecklistSection from 'checklist/ChecklistSection';

const Checklist = props => {
  const { order } = useContext(OrderContext);

  const createChecklist = () => {
    let checklist = [];

    Object.entries(order).map(([name, items]) => {
      checklist.push({
        name,
        items: Object.entries(items).map(([name, amount]) => {
          return {
            name,
            amount,
            isChecked: false
          };
        })
      });
    });

    return checklist;
  };

  const checklist = createChecklist();

  return (
    <ScreenContainer>
      <Text>Checklist Screen</Text>
      {checklist.length > 0 ? (
        checklist.map(section => (
          <ChecklistSection key={section.name} section={section} />
        ))
      ) : (
        <Text>You're all stocked up!</Text>
      )}
      <Button
        title="Go to Form Screen"
        onPress={() => props.navigation.navigate('Form')}
      />
    </ScreenContainer>
  );
};

export default Checklist;
