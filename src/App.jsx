// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { addPositions } from './store/positions/positionActions';

// import data from './mock/data.json';

import { FilterPanel } from './features/filter/FilterPanel';
import { JobList } from './features/positions/JobList';
import { TheHeader } from './components/TheHeader';

function App() {
  /*   const disatch = useDispatch();

  useEffect(() => {
    disatch(addPositions(data));
    // eslint-disable-next-line
  }, []); */

  return (
    <>
      <TheHeader />
      <div className='container'>
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
