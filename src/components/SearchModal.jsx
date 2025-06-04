import { useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { topTools, allTools } from '../tools';
import { useSearchParams, Link } from "react-router-dom";
import { nanoid } from "nanoid";


export default function SearchModal({ handleSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search");

    
  const modalRef = useRef(null); // 👈 Ref to modal container

  const normalizedFilter = searchFilter?.trim().toLowerCase();

  const displaySearch = normalizedFilter
    ? allTools.filter(tool =>
        tool.name.toLowerCase().includes(normalizedFilter)
      )
    : topTools;

  // 👇 Detect outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        handleSearch(); // 👈 Call modal close
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleSearch]);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex flex-col items-center justify-center duration-300 ease-in'>
      {/* Attach ref to this wrapper */}
      <div ref={modalRef} className='w-full flex flex-col items-center'>
        <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 flex items-center gap-2'>
          <div className="text-2xl"><CiSearch /></div>
          <input
            onChange={(e) => setSearchParams({ search: e.target.value })}
            type='text'
            placeholder='Search for cheatsheet...'
            className='w-full rounded-lg outline-0'
          />
          <button
            onClick={handleSearch}
            className="border-l pl-4 border-gray-300 text-gray-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
        <div className="bg-white w-11/12 md:w-1/2 max-h-[60vh] divide-y divide-gray-300 mt-2 rounded-lg overflow-y-auto">
          {displaySearch.map(tool => (
            <Link
              to={`/tools/${tool.slug}`}
              key={nanoid()}
              onClick={handleSearch}
              className='inline-block p-4 w-full'
            >
              <h3 className='text-sm font-semibold'>{tool.name}</h3>
              <p className='text-gray-500 text-sm'>{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
