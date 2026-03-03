import React from 'react';
import './footer.css'

const Footer = () => {
    return (
        <div className='bg-neutral text-neutral-content py-15'>
            <footer className="footer grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-11/12 lg:max-w-5/6 mx-auto border-b border-b-gray-700 pb-5">
                <nav>
                    <h6 className="footer-title">Support Ticket</h6>
                    <div>
                        <p>We provide a smart and reliable support ticket system that connects customers with the right solutions quickly. Our goal is to make support simple, transparent, and efficient for everyone.</p>
                    </div>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Sales</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Product & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
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