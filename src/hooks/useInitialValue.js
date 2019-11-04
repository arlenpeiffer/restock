import { useContext } from 'react';
import OrderContext from 'contexts/OrderContext';

const useInitialValue = (
  initialValueKey,
  defaultValue,
  sectionToMatch,
  itemToMatch
) => {
  const { order } = useContext(OrderContext);

  let initialValue = defaultValue;

  order.some(section => {
    if (section.name === sectionToMatch) {
      section.items.some(item => {
        if (item.name === itemToMatch) {
          initialValue = item[initialValueKey];
        }
      });
    }
  });

  return initialValue;
};

export default useInitialValue;
