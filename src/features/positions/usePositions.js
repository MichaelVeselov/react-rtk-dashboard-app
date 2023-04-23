import { useSelector } from 'react-redux';

import { selectVisiblePositions } from './positionSlice';
import { selectAllFilters } from '../filter/filterSlice';

export const usePositions = () => {
  const currentFilters = useSelector(selectAllFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  return positions;
};
