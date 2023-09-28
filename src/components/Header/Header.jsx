import { Link, NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <div className="container mx-auto my-10"> 
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/donation'}>Donation</NavLink></li>
                            <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                        </ul>
                    </div>
                    <Link>
                        <img src="https://i.ibb.co/4gT9TwW/Logo.png" alt="" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu-horizontal px-1 gap-12 text-xl font-medium">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/donation'}>Donation</NavLink></li>
                        <li><NavLink to={'/statistics'}>Statistics</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;