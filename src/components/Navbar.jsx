import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-30 px-4">
        <div className="logo">
            <Link className="text-2xl font-bold" to="/">Ademto</Link>
        </div>
        <ul className="hidden md:flex gap-10">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/tools">Tools</Link></li>
            <li><Link to="/categories">Categories</Link></li>
            <li><Link to="/glossary">Glossary</Link></li>
        </ul>
        <div className="user-actions">
            <button className="bg-[#D2E1C1] px-4 py-2 rounded-full">Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar