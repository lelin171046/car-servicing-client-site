import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.jpg'
import useAuth from '../useAuth';

const NavBar = () => {
    const {user, signOut} = useAuth();
    
    const [theme, setTheme] = useState('light');
    useEffect(()=>{
        localStorage.setItem('theme', theme);
        document.querySelector('html').setAttribute('data-theme', theme)
    },[theme]);

    const handleTheme = (e) => {

		if (e.target.checked) {
			setTheme('dark')
		}
		else {
			setTheme('light')
		}}
    const NavItem = <>

        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/services'}>Services</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
        

  </>
    return (
        <div className="navbar border-2 border-black h-28  bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {NavItem}
                    </ul>
                </div>
                <Link to={'/'} className="btn w-24  btn-ghost text-xl">
                    <img className='rounded-xl' src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {NavItem}
                </ul>
            </div>
            <div className="navbar-end">
            {
					user ? <>
						<details className="dropdown mr-4">
							
							<ul className="menu left-3 dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">

								<li><a>{user.displayName || user.name}</a></li>
								<li>
									<NavLink onClick={signOut} ><a className=" font-semibold dark:border-gray-800 dark:text-gray-800">LogOut</a></NavLink>
                                    
								</li>
                                <li><Link to={'/bookings'}>My booking</Link></li>
							</ul>
						</details>


					</> :
						<NavLink to={'/login'} ><button type="button" className="btn bg-pink-500 btn-sm font-semibold border rounded dark:border-gray-800 dark:text-gray-800">Login</button></NavLink>
				}
            <button className="btn btn-outline btn-error">Appointment</button>
            
<input type="checkbox" onChange={handleTheme} value="synthwave" className="toggle theme-controller" />
            </div>
        </div>
    );
};

export default NavBar;