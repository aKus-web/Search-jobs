interface JobTagsProps {
    isNew:boolean;
    featured:boolean;
}

export const JobTags = ({isNew, featured}: JobTagsProps) => {
    return (
        <div className="flex flex-wrap items-center gap-6">
            {
                isNew && <p className="bg-primary text-white py-2 px-4 rounded-[50px] uppercase text-[12px] font-bold">New!</p>
            }

            {
                featured && <p className="bg-veryDarkCyan text-white py-2 px-4 rounded-[50px] uppercase text-[12px] font-bold">Featured</p>
            }
        </div>
    )
}
