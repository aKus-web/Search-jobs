import data from '../data.json';
import { Job } from './';

export const ListAllJobs = () => {
    return (
        <>
            {
                data.map(job => (
                    <Job key={job.id} jobData={job} />
                ))
            }
        </>
    )
}
