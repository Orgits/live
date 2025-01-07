import Image from 'next/image';
import React from 'react';
import anim1Thumb from '@/assets/img/shape/anim-1.png'
import anim2Thumb from '@/assets/img/shape/anim-2.png'
import anim3Thumb from '@/assets/img/shape/anim-3.png'
import anim4Thumb from '@/assets/img/shape/anim-4.png'
import aboutThumb from "@/assets/img/about/84835.png"
import signatureThumb from "@/assets/img/signature.png"
import About1Card from './About1Card';

const AboutStyle1 = () => {
    return (
        <>
            <div className="about-style-one-area default-padding">
                <div className="shape-animated-left">
                    {/* <Image src={anim1Thumb} alt="Image Not Found" /> */}
                    {/* <Image src={anim2Thumb} alt="Image Not Found" /> */}
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="about-style-one col-xl-6 col-lg-5">
                            <div className="h4 sub-heading">Feel Valued & Rewarded</div>
                            <h2 className="title mb-25">Empowering Financial Clarity and Success</h2>
                            <p>
                            We are dedicated to understanding your challenges and are committed to asking the right questions to deliver impactful solutions. Our expertise is built on a foundation of knowledge and education. Beyond numbers, we focus on creating meaningful connections. We value diverse perspectives and strive to provide insights that empower your financial journey. Together, let’s craft a future of financial clarity and success.
                            </p>
                            <div className="owner-info">
                                <div className="left-info">
                                    <h2><b>CA Vinit Jain</b></h2>
                                    <span>Co-Founder & Managing Partner </span>
                                </div>
                                <div className="right-info">
                                    {/* <Image src={signatureThumb} alt="Image Not Found" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="about-style-one col-xl-5 offset-xl-1 col-lg-6 offset-lg-1">
                            <div className="about-thumb">
                                <Image className="wow fadeInRight" src={aboutThumb} alt="Image Not Found" />
                                <About1Card />
                                <div className="thumb-shape-bottom wow fadeInDown" data-wow-delay="300ms">
                                    {/* <Image src={anim3Thumb} alt="Image Not Found" />
                                    <Image src={anim4Thumb} alt="Image Not Found" /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutStyle1;