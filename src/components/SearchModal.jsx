import { useEffect, useRef, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { topTools, allTools } from '../tools';
import { useSearchParams, Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function SearchModal({ handleSearch }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchFilter = searchParams.get("search");
  const [show, setShow] = useState(false); // 👈 for animation trigger
  const modalRef = useRef(null);
  const inputRef = useRef(null); // 👈 create ref for input

  useEffect(() => {
    // Animate in
    setShow(true);
  }, []);

  // Autofocus input when modal opens
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Close modal on Esc key press
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setShow(false);
        setTimeout(() => handleSearch(), 200);
      }
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleSearch]);

  const normalizedFilter = searchFilter?.trim().toLowerCase();

  const displaySearch = normalizedFilter
    ? allTools.filter(tool =>
        tool.name.toLowerCase().includes(normalizedFilter)
      )
    : topTools;

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShow(false);
        setTimeout(() => handleSearch(), 200); // Delay for animation out
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [handleSearch]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-50 flex items-center justify-center">
      {/* Modal content with animation */}
      <div
        ref={modalRef}
        className={`transform transition-all duration-300 ease-in-out w-full flex flex-col items-center ${
          show ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-4'
        }`}
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-1/2 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="text-2xl"><CiSearch /></div>
            <input
              ref={inputRef}  // 👈 attach ref here
              value={searchFilter || ''}
              onChange={(e) => setSearchParams({ search: e.target.value })}
              type="text"
              placeholder="Search for cheatsheet..."
              aria-label="Search cheatsheets"
              className="w-full rounded-lg outline-0"
            />
            <button
              onClick={() => {
                setShow(false);
                setTimeout(() => handleSearch(), 200);
              }}
              className="border-l pl-4 border-gray-300 text-gray-500 cursor-pointer"
            >
              Cancel
            </button>
            <p className="hidden md:flex text-xs text-gray-500 italic border p-1 rounded-sm"><kbd>Esc</kbd></p>
          </div>
        </div>

        <div className="bg-white w-11/12 md:w-1/2 max-h-[60vh] divide-y divide-gray-300 mt-2 rounded-lg overflow-y-auto">
          {displaySearch.map(tool => (
            <Link
              to={`/tools/${tool.slug}`}
              key={nanoid()}
              onClick={handleSearch}
              className="inline-block p-4 w-full"
            >
              <h3 className="text-sm font-semibold">{tool.name}</h3>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
