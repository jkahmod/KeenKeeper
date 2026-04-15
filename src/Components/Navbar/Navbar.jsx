
import { NavLink } from 'react-router';
import "../../index.css";
import Logo from "../../assets/logo.png";
import { FaChartLine, FaClock, FaHome } from 'react-icons/fa';

const Navbar = () => {
    return (
        <div>

            <nav className='bg-base-200 shadow-sm'>
                <div className="navbar  w-[100%] lg:w-[1400px] m-auto flex justify-between ">

                <div className="navbar-start">
                    <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow flex mr-3">
                        <li><NavLink to="/"><FaHome/>Home </NavLink></li>
                        <li><NavLink to="/timeline"><FaClock/>Timeline </NavLink></li>
                        <li><NavLink to="/stats"><FaChartLine />Stats </NavLink></li>                              
                    </ul>
                    </div>
                    <div> </div>
                    <img src={Logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                    <li><NavLink to="/"><FaHome/>Home </NavLink></li>
                        <li><NavLink to="/timeline"><FaClock/>Timeline </NavLink></li>
                        <li><NavLink to="/stats"><FaChartLine />Stats </NavLink></li>
                    </ul>
                </div>    

               </div> 
            </nav>
            
        </div>
    );
};

export default Navbar;