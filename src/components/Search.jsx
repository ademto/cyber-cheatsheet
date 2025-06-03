import { CiSearch } from "react-icons/ci";

const Search = () => {
  return (
    <div className='md:bg-[#F2F2F5] w-10 md:w-60 px-4 py-3 rounded-full md:rounded-xl flex items-center gap-2'>
        <div className="bg-[#F2F2F5] rounded-full p-1 md:p-0 mr-2 md:mr-0"><CiSearch className="text-[#6B7882] text-2xl" /></div>
        <input className="text-sm placeholder-transparent md:placeholder-[#6B7882]" type="search" placeholder='Search for cheatsheet' name="" id="" />
    </div>
  )
}

export default Search   