import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className='w-1/2 border-2 flex items-center'>
        <FaSearch />
        <input type="search" placeholder='Search for cheatsheet' name="" id="" />
    </div>
  )
}

export default Search   