import Image from 'next/image';
import React from 'react';
import about7Thumb from '@/assets/img/service/contract-8858773_1280.webp'
import about8Thumb from '@/assets/img/about/8.jpg'
import anim5Shape from '@/assets/img/shape/anim-5.png'
import Link from 'next/link';

const AboutStyle2 = ({ sectionClass }) => {
    return (
        <>
            <div className={`about-style-two-area overflow-hidden bg-contain default-padding ${sectionClass ? sectionClass : ''}`}
                style={{ backgroundImage: `url(/assets/img/shape/29.png)` }}>
                <div className="container">
                    <div className="row align-center">

                        <div className="col-lg-5 about-style-two">
                            <div className="thumb">
                                <Image src={about7Thumb} alt="Image Not Found" />
                                <Image src={about8Thumb} alt="Image Not Found" />
                                <div className="experience">
                                    <h2><strong>15</strong> Years experience</h2>
                                </div>
                                <div className="shape">
                                    <Image src={anim5Shape} alt="Shape" />
                                </div>
                            </div>
                        </div>
                        <div className="about-style-two col-lg-6 offset-lg-1">
                            <h2 className="title">Strategic Financial Consulting for <br /> Modern Challenges</h2>
                            <p>
                                In today's fast-paced and dynamic business environment, navigating financial complexities requires a forward-thinking approach. At SJVJ & Co., we specialize in delivering tailored financial consulting solutions that empower businesses to thrive in challenging times.

                                Our expertise spans a wide range of services, including financial planning, risk management, compliance, and strategic growth advisory. With a commitment to precision and innovation, we help you transform challenges into opportunities, ensuring your financial health remains robust and resilient.

                                Partner with us for a future-focused financial strategy designed to meet your unique needs.
                            </p>
                            <div className="default-features mt-30">
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-investment-3"></i>
                                        <h4>Targeting & <br /> Positioning</h4>
                                    </Link>
                                </div>
                                <div className="default-feature-item">
                                    <Link href="#" scroll={false}>
                                        <i className="flaticon-progress"></i>
                                        <h4>Unique Ideas <br /> & Solution</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle2;