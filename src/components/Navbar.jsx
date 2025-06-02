import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='border-b-2 border-[#E5E8EB]'>
      <div className="container mx-auto flex items-center justify-between h-20 px-4">
          <div className="logo">
              <Link className="text-2xl font-bold" to="/">Ademto</Link>
          </div>
          <ul className="hidden md:flex gap-10">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Categories</Link></li>
              <li><Link to="/">Glossary</Link></li>
          </ul>
          <div className="user-actions">
              <button className="bg-[#D2E1C1] px-4 py-2 rounded-full">Contact Me</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar