import { Job } from './';
import { useMemo, useState } from 'react';
import { useFilteredJobs } from '../hooks/useFilteredJobs';

export const ListFiltersJobs = () => {

    const { getFilteredJobs, filterTags } = useFilteredJobs();

    const jobsFiltered = useMemo(
        getFilteredJobs,
        [filterTags]
    );

    return (
        <>
            {
                jobsFiltered.map(job => (
                    <Job key={job.id} jobData={job} />
                ))
            }
        </>
    )
}
