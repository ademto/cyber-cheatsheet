import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='bg-[#F2F2F5] w-60 px-4 py-3 rounded-xl flex items-center gap-2'>
        <CiSearch className="text-[#6B7882]" />
        <input className="text-sm" type="search" placeholder='Search for cheatsheet' name="" id="" />
    </div>
  )
}

export default Search   