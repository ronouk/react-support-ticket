import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
        <div className='shadow-sm bg-white'>
            <div className="navbar max-w-11/12 lg:max-w-5/6 mx-auto">
                <div className="flex-1">
                    <a className="text-lg lg:text-xl font-bold cursor-pointer">Support Ticket</a>
                </div>
                <div className="flex-none hidden md:block">
                    <ul className="menu menu-horizontal px-1 items-center font-semibold">
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className='btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white hover:bg-none hover:bg-gray-700'>+ New Ticket</a></li>
                    </ul>
                </div>

                <div className="dropdown dropdown-end md:hidden">
                    <label tabIndex={0} className="btn btn-ghost">
                        <i className="fa-solid fa-bars" />
                    </label>

                    <ul
                        tabIndex={0}
                        className="dropdown-content menu bg-base-100 rounded-box mt-2 w-52 p-2 shadow gap-1"
                    >
                        <li><a>Home</a></li>
                        <li><a>FAQ</a></li>
                        <li><a>Changelog</a></li>
                        <li><a>Blog</a></li>
                        <li><a>Download</a></li>
                        <li><a>Contact</a></li>
                        <li><a className="btn bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white hover:bg-none hover:bg-gray-700">+ New Ticket</a></li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Navbar;