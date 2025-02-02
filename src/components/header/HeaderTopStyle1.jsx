import React from 'react';
import SocialShare from '../utilities/SocialShare';

const HeaderTopStyle1 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
                            <ul className="item-flex">
                                <li>
                                    <i className="fas fa-map-marker-alt"></i>
                                     <a href="/contact-us">Branch Offices in India</a>
                                </li>
                                <li>
                                    <a href="tel:+919999667121"><i className="fas fa-phone-alt"></i> +91 99996 67121</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle1;