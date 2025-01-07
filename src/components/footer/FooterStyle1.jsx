import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logo from '@/assets/img/logo/logo.png'
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import FooterNewsLetter from '../form/FooterNewsLetter';

const FooterStyle1 = ({ shape, shapeClass,  formStyle }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {/* {shape ? <Image src={shape} alt="Shape" /> : <Image src={shape7} alt="Shape" />} */}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                <Link className="navbar-brand" href="/">
                                <Image src={logo} className="logo" alt="Logo" />
                </Link>
                                    <p> Trusted Excellence in Accounting, Taxation, and Financial Solutions.
                                    </p>
                                    <div className="opening-hours">
                                        <h5>Opening Hours</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Monday – Saturday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">10AM – 7PM</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Sunday:</div>
                                                <div className="marker"></div>
                                                <div className="working-hour">Off Day</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Company</h4>
                                    <ul>
                                        <li>
                                            <Link href="#">Compnay Profile</Link>
                                        </li>
                                        <li>
                                            <Link href="/about-us">About Us</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Our Team</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Service</Link>
                                        </li>
                                        <li>
                                        <Link href="/contact-us">Contact Us</Link>
                                        </li>
                                        <li>
                                        <Link href="/blog-3-column">Blogs</Link>
                                        </li>
                                        <li>
                                            <Link href="#">Disclaimer</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link href="./">Audit & Assurance</Link>
                                        </li>
                                        <li>
                                            <Link href="./">Reports & Certification</Link>
                                        </li>
                                        <li>
                                            <Link href="./">Outsourcing Support Service</Link>
                                        </li>
                                        <li>
                                            <Link href="./">Governance, Risk & Compilance Advisory</Link>
                                        </li>
                                        <li>
                                            <Link href="./">Advisory & Assistance</Link>
                                        </li>
                                        <li>
                                            <Link href="./">FEMA Advisory</Link>
                                        </li>
                                        <li>
                                            <Link href="./">Corporate Law</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">Newsletter</h4>
                                <p>
                                Stay Ahead! Join our newsletter for expert tips,<br />updates, and exclusive insights into accounting and finance.
                                </p>
                                <div className={`f-item newsletter ${formStyle}`}>
                                    <FooterNewsLetter />
                                </div>
                                <ul className="footer-social">
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {(new Date().getFullYear())}. All Rights Reserved by SJVJ & CO.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="./">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="./">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/contact-us">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;