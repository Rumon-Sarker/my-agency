import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/projects'}>Projects</Link></li>
                            <li><Link href={'/team'}>Team</Link></li>
                            <li><Link href={'/services'}>Services</Link></li>
                            <li><Link href={'/testimonial'}>Testimonial</Link></li>
                            <li><Link href={'/login'}>Login</Link></li>
                            <li><Link href={'/register'}>Register</Link></li>
                        </ul>
                    </div>
                    <Link href={'/'} className="btn btn-ghost normal-case text-2xl font-extrabold  ">MY<span className='text-orange-500'>AGENCY</span></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu  menu-horizontal px-1">
                        <li ><Link className='hover:text-orange-400' href={'/'}>Home</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/projects'}>Projects</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/team'}>Team</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/services'}>Services</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/testimonial'}>Testimonial</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/login'}>Login</Link></li>
                        <li><Link className='hover:text-orange-400' href={'/register'}>Register</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;