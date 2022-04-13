import { remove } from "../store/filtersSlice";
import { useDispatch } from 'react-redux';

interface FilterItemProps {
    tagName: string;
}

export const FilterItem = ({ tagName }: FilterItemProps) => {

    const dispatch = useDispatch();

    const handleRemoveTag = (tagName:string) => {
        dispatch(
            remove(tagName)
        )
    }

    return (
        <li className="flex">
            <p className="rounded-l-[5px] bg-tables text-primary font-bold px-6 py-2 text-[15px]">{tagName}</p>

            <button onClick={() => handleRemoveTag(tagName)} className="bg-primary rounded-r-[5px] w-[30px] flex items-center justify-center cursor-pointer">
                <img src="./images/icon-remove.svg" alt="Remove" />
            </button>
        </li>
    )
}
