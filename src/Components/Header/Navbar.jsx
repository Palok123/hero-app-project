import { Link, NavLink } from "react-router";
import { FiAlignRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import logo from '../../assets/logo.png';
import './Nav.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const goToGithub = ()=>{
        window.open("https://github.com/Palok123", "_blank");
    }
    return (
        <nav className="flex justify-between items-center mt-4 relative  w-[94%] mx-auto ">

        
            <Link to={'/'} className="flex gap-2 items-center">
            <FiAlignRight className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}></FiAlignRight>
            <div>
                <img src={logo} alt="header-logo" className="h-10 w-10" />
            </div>
            <h2 className="font-bold text-2xl text-[#632EE3]">HERO.IO</h2>
           </Link>
            
            <div className="hidden md:flex gap-6 text-[18px] items-center">
                  <NavLink to={'/'}>Home</NavLink>
                  <NavLink to={'/apps'} >Apps</NavLink>
                  <NavLink to={'/installation'} >Installation</NavLink>
            </div>
            <div className={` ${isMenuOpen ? 'flex' : 'hidden'} flex-col items-center  gap-6 text-[18px] absolute top-10 left-0 w-[150px] rounded-2xl bg-indigo-100 p-4`}>
                  <NavLink to={'/'} >Home</NavLink>
                  <NavLink to={'/apps'} >Apps</NavLink>
                  <NavLink to={'/installation'} >Installation</NavLink>
              </div>
            <div className=" text-[18px]">
               
                <button onClick={goToGithub} className="bg-[#9F62F2] py-2 px-4 text-white rounded-md flex items-center gap-1"> <FaGithub /> <span>Contribute</span></button>
            </div>
        
           
          
        </nav>
    )
}