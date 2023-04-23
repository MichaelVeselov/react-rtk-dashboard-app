import { useDispatch } from 'react-redux';

import { addFilter } from '../filter/filterSlice';
import { useFetchPositions } from './useFetchPositions';
import { usePositions } from './usePositions';

import { JobPosition } from './JobPosition';

const JobList = () => {
  useFetchPositions();

  const data = usePositions();

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className='job-list'>
      {data.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
