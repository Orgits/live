import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'

const ChooseStyle1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_960_720.jpg)` }}></div>
                <div className="shape-left-top">
                    {/* <Image src={shape17} alt="Shape" /> */}
                </div>
                {/* <div className="text-invisible">SJVJ & CO.</div> */}
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-35">Stay Ahead with Innovative Financial Solutions</h2>
                                <ul className="list-item">
                                    <li className="wow fadeInUp">
                                        <h4>Accuracy. Transparency. Trust </h4>
                                        <p>
                                        Our services focus on delivering precision-driven insights, fostering financial clarity, and building unwavering confidence. We ensure compliance while helping you make informed, strategic decisions for sustainable growth.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>24/7 Customer Support </h4>
                                        <p>
                                        Our support services are designed to be your backbone in navigating complex financial and business challenges. With a commitment to dependability and excellence, we provide tailored assistance that empowers your success and fosters lasting partnerships.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;