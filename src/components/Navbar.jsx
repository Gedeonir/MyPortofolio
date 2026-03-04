import React from "react";
import { Link } from "react-router-dom";
import { CiGrid41 } from "react-icons/ci";
import { RiCloseFill } from "react-icons/ri";
import Switcher from "./Switcher";
import Logo from "../assets/Logo.png";
import { motion } from "framer-motion";

const LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function NavBar() {
  const [openMenu, setOpenMenu] = React.useState(false);

  return (
    <nav className="fixed w-full top-0 z-20 bg-secondary bg-opacity-80 dark:bg-dark_secondary backdrop-blur-md px-6 lg:px-20 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="w-10 h-10">
        <img src={Logo} alt="Logo" className="w-full h-full object-cover" />
      </div>

      {/* Desktop Links */}
      <ul className="hidden lg:flex gap-8 font-bold text-dark_primary">
        {LINKS.map((link) => (
          <li key={link.label} className="hover:text-yellow transition">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>

      {/* Right Side: Dark Mode + Hamburger */}
      <div className="flex items-center gap-4">
        <Switcher />
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="text-dark_primary lg:hidden"
        >
          {!openMenu ? <CiGrid41 size={28} /> : <RiCloseFill size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed inset-0 bg-secondary dark:bg-dark_secondary p-8 flex flex-col items-center justify-center gap-8 text-2xl font-bold z-40"
        >
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpenMenu(false)}
              className="hover:text-yellow transition"
            >
              {link.label}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}




export function PhoneMenu(){
    return(
        <div className='block absolute top-0 w-full lg:hidden bg-secondary py-64 px-12 dark:bg-dark_secondary min-h-screen max-h-screen'>
            <ul className='px-4  text-dark_primary  w-full col-span-2'>
                {Links.map((link,index)=>(
                   <motion.li
                    whileInView={{ y: [100, 0], opacity: [0, 1] }}
                    transition={{ duration: index }}
                    className=' cursor-pointer duration-800 ease-out border-b-3 font-bold text-xl flex justify-center py-4 hover:text-btn' key={index}>
                        <Link to={link.path} className='justify-center'> {link.link}</Link>
                    </motion.li> 
                ))}              
            </ul>
        </div>
    )
}

