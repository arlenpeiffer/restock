import { useContext } from 'react';
import OrderContext from 'contexts/OrderContext';

const initialValues = {
  amount: 0,
  isChecked: false
};

const useValue = (section, item, property) => {
  const { order } = useContext(OrderContext);
  const foundSection = order.find(({ name }) => name === section);
  const foundItem =
    foundSection && foundSection.items.find(({ name }) => name === item);
  const value = foundItem ? foundItem[property] : initialValues[property];
  return value;
};

export default useValue;
