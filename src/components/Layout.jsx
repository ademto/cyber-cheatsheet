import { useState } from "react"
import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import SearchModal from "./SearchModal"


export default function Layout() {
    const [open, setOpen] = useState(true)
    return (
        <div className="site-wrapper">
            <Navbar handleSearch={() => setOpen(prevValue => !prevValue)} />
            <Outlet />
            {open && <SearchModal handleSearch={() => setOpen(prevValue => !prevValue)} />}
            <Footer />
        </div>
    )
}