import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <section  className='bg-white border-[#E5E8EB] border-t-2 py-10'>
        <div className="container mx-auto grid grid-cols-3">
            <p className="text-gray-600">© 2025 Ademto. All rights reserved.</p>
            <ul className="hidden md:flex justify-center gap-5">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Categories</Link></li>
              <li><Link to="/">Glossary</Link></li>
            </ul>
            <div className="icons flex gap-4 justify-end">
                <Link className="text-2xl hover:text-zinc-600" to="https://github.com/ademto" ><FaGithub /></Link>
                <Link className="text-2xl hover:text-zinc-600" to="https://www.linkedin.com/in/emmanuel-adetoro/" ><FaLinkedin /></Link>
                <Link className="text-2xl hover:text-zinc-600" to="/" ><FaXTwitter /></Link>
            </div>
        </div>
        
    </section>
  )
}

export default Footer