import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SearchModal from "./SearchModal";

export default function Layout() {
  const [open, setOpen] = useState(false);

  // Handle Cmd+K / Ctrl+K to open search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      const isMac = navigator.platform.toUpperCase().includes("MAC");
      if ((isMac ? e.metaKey : e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="site-wrapper">
      <Navbar handleSearch={() => setOpen((prev) => !prev)} />
      <Outlet />
      {open && <SearchModal handleSearch={() => setOpen(false)} />}
      <Footer />
    </div>
  );
}
