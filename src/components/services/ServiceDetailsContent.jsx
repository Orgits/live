import Image from 'next/image';
import React from 'react';
import Faq1Data from '@/assets/jsonData/faq/Faq1Data.json';
import SingleFaq1 from '../faq/SingleFaq1';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceDetailsContent = ({ serviceInfo }) => {
    const { thumbFull, title, text } = serviceInfo

    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={`/assets/img/service/${thumbFull}`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>{title}</h2>
                                <p>{text}</p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    <li>N/A</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                        <div className="content">
                                                <h3>The Challange</h3>
                                                <ul className="feature-list-item">
                                                    <li>N/A</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="content">
                                                <h3>What We Do</h3>
                                                <ul className="feature-list-item">
                                                    <li>N/A</li>
                                                </ul>
                                            </div>

                                <div className="faq-style-one dark mt-40">
                                    <h3 className="mb-30">Common Question for this project</h3>
                                    <div className="accordion" id="faqAccordion">
                                        {Faq1Data.slice(0, 3).map(faq =>
                                            <SingleFaq1 faq={faq} key={faq.id} />
                                        )}
                                    </div>
                                </div>

                                <div className="services-more mt-40">
                                    <h2>Popular Services</h2>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-personal"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>Trademark & Registration</Link></h4>
                                                <p>
                                                Protect your brand with Trademark Registration and secure creative works with Copyright services. Simplify compliance and safeguard your intellectual property effortlessly.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="item">
                                                <i className="flaticon-career"></i>
                                                <h4><Link href="#" onClick={handleSmoothScroll}>FEMA Advisory</Link></h4>
                                                <p>
                                                Navigate FEMA regulations with expert guidance. Simplify compliance, manage foreign exchange, and ensure seamless cross-border transactions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Other Services</h4>
                                    <div className="content">
                                        <ul>
                                        <li><Link href="#">Trademark & Registration</Link></li>
                                            <li><Link href="#">Audit & Assurance</Link></li>
                                            <li className="current-item"><Link href="#">Reports & Certification</Link></li>
                                            <li><Link href="#">Advisory & Assistance</Link></li>
                                            <li><Link href="#">Outsourcing Support Service</Link></li>
                                            <li><Link href="#">FEMA Advisory</Link></li>
                                            <li><Link href="#">Corporate Law</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Call corporate office and we will connect you with a team member help.
                                        </p>
                                        <h2><a href="tel:+919999667121">+(91) 99996 67121</a></h2>
                                        <h4><a href="mailto:info@sjvj.in">info@sjvj.in</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div>

                                <div className="single-widget widget-brochure">
                                    <h4 className="widget-title">Brochure</h4>
                                    <ul>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Download Brochure </Link></li>
                                        <li><Link href="#" onClick={handleSmoothScroll}><i className="fas fa-file-pdf"></i> Company Details </Link></li>
                                    </ul>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;