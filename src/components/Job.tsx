import { Jobs } from '../interfaces/Jobs';
import { JobFeatures, JobTags, JobSkillsTags } from './';

interface JobProps {
  jobData: Jobs;
}

export const Job = ({ jobData }: JobProps) => {

  const {
    company,
    logo,
    isNew,
    featured,
    position,
    postedAt,
    contract,
    location,
    tags
  } = jobData;


  return (
    <article className="mb-28 min-h-[280px] max-w-[1100px] mx-auto  bg-white rounded-[5px] shadow-[0_0_20px_#CCE1E3] border-l-[5px] border-l-primary relative px-8 lg:grid lg:grid-cols-2 lg:items-center lg:min-h-[180px]">
      <div className="lg:flex items-center gap-8">
        <img
          src={logo}
          alt="Logo"
          className="w-[60px] absolute top-[-30px] left-[20px] lg:static lg:w-[100px] lg:h-[100px]"
        />

        <div className="pt-[45px] flex flex-col gap-4 border-b border-b-darkCyan pb-6 lg:border-none lg:pt-0">
          <p className="text-primary font-bold text-[16px]">{company}</p>

          <JobTags isNew={isNew} featured={featured} />

          <p className="text-veryDarkCyan font-bold text-[18px] hover:text-primary hover:cursor-pointer hover:duration-300">{position}</p>

          <JobFeatures postedAt={postedAt} contract={contract} location={location} />
        </div>
      </div>

      <div className="py-8 lg:justify-self-end">
        <JobSkillsTags tags={tags} />
      </div>
    </article>
  )
}
