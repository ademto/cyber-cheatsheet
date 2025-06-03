import { Link, useLocation } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Search from './Search';

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <div className={`${pathname === "/" ? "bg-[#fefae0]" : "bg-white border-b-2"} border-[#E5E8EB] `}>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div className="logo">
              <Link className="text-2xl font-bold" to="/">Ademto</Link>
          </div>

          {/* <div className="user-actions">
              <button className="bg-[#D2E1C1] px-4 py-2 rounded-full">Contact Me</button>
          </div> */}
          
          <div className="icons flex items-center gap-4">
              <Search />
              <Link className="text-xl hover:text-zinc-600" to="https://github.com/ademto" ><FaGithub /></Link>
              <Link className="text-xl hover:text-zinc-600" to="https://www.linkedin.com/in/emmanuel-adetoro/" ><FaLinkedin /></Link>
              <Link className="text-xl hover:text-zinc-600" to="/" ><FaXTwitter /></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar