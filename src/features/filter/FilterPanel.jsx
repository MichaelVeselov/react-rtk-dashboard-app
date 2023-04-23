import { useDispatch, useSelector } from 'react-redux';

import { removeFilter, clearFilter, selectAllFilters } from './filterSlice';

import { Badge } from '../../UI/Badge';
import { Card } from '../../UI/Card';
import { Stack } from '../../UI/Stack';

const FilterPanel = () => {
  const dispatch = useDispatch();

  const currentFilters = useSelector(selectAllFilters);
  if (currentFilters.length === 0) return null;

  return (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((filter) => (
            <Badge
              key={filter}
              variant='clearable'
              onClear={() => dispatch(removeFilter(filter))}
            >
              {filter}
            </Badge>
          ))}
        </Stack>

        <button className='link' onClick={() => dispatch(clearFilter())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
