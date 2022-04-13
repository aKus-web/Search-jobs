import { useSelector, useDispatch } from 'react-redux';
import { FilterItem } from './';
import { IRootState } from '../store/interface';
import { clear } from '../store/filtersSlice';

export const Header = () => {

  const dispatch = useDispatch();
  const filters = useSelector((state: IRootState) => state.filter);

  const handleClearTags = () => {
    dispatch(
      clear()
    )
  }

  return (
    <header className="h-[220px] bg-primary">
      <div className="h-[220px] bg-[url('/images/bg-header-mobile.svg')] bg-no-repeat bg-cover xl:bg-[url('/images/bg-header-desktop.svg')] flex justify-center items-center">

        {
          filters.length > 0 && (
            <div className="bg-white w-[85%] max-w-[850px] min-h-[50px] rounded-[5px] p-6 flex items-center max-h-[150px] overflow-auto">

              <ul className="flex flex-grow flex-wrap gap-8">
                {
                  filters.length > 0 && (
                    filters.map(filter => <FilterItem key={filter} tagName={filter} />)
                  )
                }
              </ul>

              <p onClick={handleClearTags} className="text-darkCyan font-bold text-[16px] cursor-pointer hover:underline hover:text-primary">Clear</p>
            </div>
          )
        }

      </div>
    </header>
  )
}
