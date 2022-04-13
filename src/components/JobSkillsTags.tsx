import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/filtersSlice";

interface JobSkillsTagsProps {
    tags: string[];
}

export const JobSkillsTags = ({ tags }: JobSkillsTagsProps) => {

    const dispatch = useDispatch();

    const handleAddTag = (e:MouseEvent) => {
        const target = e.target as Element;
        const tag = target.getAttribute('data-tag');

        dispatch(
            add(tag)
        )
    }

    return (
        <ul className="flex flex-wrap gap-6">
            {
                tags.length !== 0 && (
                    tags.map(language => (
                        <li
                            key={Math.random() * 10}
                            onClick={handleAddTag}
                            data-tag={language}
                            className="rounded-[8px] bg-tables text-primary py-2 px-4 text-[15px] font-bold hover:bg-primary hover:text-white hover:cursor-pointer hover:duration-300">{language}
                        </li>
                    ))
                )
            }
        </ul>
    )
}
