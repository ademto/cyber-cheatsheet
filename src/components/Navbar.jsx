import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

const Navbar = ({handleSearch}) => {
  const { pathname } = useLocation();

  return (
    <div className={`${pathname === "/" ? "bg-[#fefae0]" : "bg-white border-b-2"} border-[#E5E8EB] `}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div className="logo">
              <Link className="text-2xl font-bold" to="/">Ademto</Link>
          </div>
          
          <div className="icons flex items-center gap-4">
              <button onClick={handleSearch} className='cursor-pointer bg-[#F2F2F5] text-[#6B7882] py-3 px-4 rounded-xl flex items-center gap-2 text-sm'>
                <CiSearch className='text-2xl'/>
                Search for cheatsheet</button>
              <Link className="text-xl hover:text-zinc-600" to="https://github.com/ademto" ><FaGithub /></Link>
              <Link className="text-xl hover:text-zinc-600" to="https://www.linkedin.com/in/emmanuel-adetoro/" ><FaLinkedin /></Link>
              <Link className="text-xl hover:text-zinc-600" to="/" ><FaXTwitter /></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar