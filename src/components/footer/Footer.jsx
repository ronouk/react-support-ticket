import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content py-15'>
            <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-11/12 lg:max-w-5/6 mx-auto border-b border-b-gray-700 pb-5">
                <nav>
                    <h6 className="footer-title">Support Ticket</h6>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex illum consectetur nobis, dicta sequi accusamus veritatis perferendis molestias ab libero!</p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <div className='flex items-center gap-2'>
                        <i class="fa-brands fa-x-twitter"></i>
                        <a className="link link-hover"><p>Twitter</p></a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i class="fa-brands fa-linkedin-in"></i>
                        <a className="link link-hover"><p>LinkedIn</p></a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i class="fa-brands fa-facebook-f"></i>
                        <a className="link link-hover"><p>Facebook</p></a>
                    </div>
                    <div className='flex items-center gap-2'>
                        <i class="fa-solid fa-envelope"></i>
                        <a className="link link-hover"><p>Email</p></a>
                    </div>
                </nav>
            </footer>
            <div className='text-center pt-5'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;