import data from './data.json';
import { Header, JobsContainer, Job, ListAllJobs, ListFiltersJobs } from './components';
import { IRootState } from './store/interface';
import { useSelector } from 'react-redux';

function App() {

  const filters = useSelector((state: IRootState) => state.filter);

  return (
    <>
      <Header />
      <JobsContainer>
        {
          filters.length === 0
            ? <ListAllJobs />
            : <ListFiltersJobs />
        }
      </JobsContainer>
    </>
  )
}

export default App
