import data from '../data.json';
import { useSelector } from 'react-redux';
import { IRootState } from '../store/interface';

export const useFilteredJobs = () => {
    const filterTags = useSelector((state: IRootState) => state.filter);

    const getFilteredJobs = () => {
        const compatiblesJobs = data.filter(job => {
            const { tags: jobTags } = job;
            let isCompatible: boolean[] = []

            for (let i = 0; i < filterTags.length; i++) {
                const filterTag = filterTags[i];

                isCompatible = [...isCompatible, jobTags.includes(filterTag)]
            }

            const isValidJob = isCompatible.every(isTrue => isTrue)

            if (isValidJob) return job;
        })

        return compatiblesJobs;
    }

    return {
        getFilteredJobs,
        filterTags
    };

}