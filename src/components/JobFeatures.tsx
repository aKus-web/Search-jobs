interface JobFeaturesProps {
    postedAt:string;
    contract:string;
    location:string;
}

export const JobFeatures = ({postedAt, contract, location}: JobFeaturesProps) => {
    return (
        <ul className="flex text-darkCyan items-center gap-4 text-[15px]">
            <li>{postedAt}</li>
            <li className="w-[3.5px] h-[3.5px] bg-darkCyan rounded-[50%]"></li>
            <li>{contract}</li>
            <li className="w-[3.5px] h-[3.5px] bg-darkCyan rounded-[50%]"></li>
            <li>{location}</li>
        </ul>
    )
}
