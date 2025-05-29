const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-30 px-4">
        <div className="logo">
            <a className="text-2xl font-bold" href="/">Ademto</a>
        </div>
        <ul className="hidden md:flex gap-10">
            <li><a href="#">About</a></li>
            <li><a href="#">Tools</a></li>
            <li><a href="#">Categories</a></li>
            <li><a href="#">Glossary</a></li>
        </ul>
        <div className="user-actions">
            <button className="bg-[#D2E1C1] px-4 py-2 rounded-full">Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar