import React from 'react';

const ContactInfo = () => {
    return (
        <>
            <div className="contact-style-one-info">
                <h2>Contact Information</h2>
                <p>
                For Any Query or Contact our Contact Information is given below or you can fill the contact form.
                </p>
                <ul>
                    <li className="wow fadeInUp">
                        <div className="icon">
                            <i className="fas fa-phone-alt"></i>
                        </div>
                        <div className="content">
                            <h5 className="title">Phone</h5>
                            <a href="tel:+919999667121">+91 99996 67121</a>
                        </div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="300ms">
                        <div className="icon">
                            <i className="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Our Locations</h5>
                            <p><b> Nehru Place at New Delhi, India</b></p>
                            <div className="info">
                            <p><b>Geeta Colony at New Delhi, India</b></p>
                            <div className="info">
                            <p><b>Etawah at Uttar Pradesh in India.</b></p>
                            </div>
                        </div></div>
                    </li>
                    <li className="wow fadeInUp" data-wow-delay="500ms">
                        <div className="icon">
                            <i className="fas fa-envelope-open-text"></i>
                        </div>
                        <div className="info">
                            <h5 className="title">Official Email</h5>
                            <a href="mailto:info@agrul.com.com">Info@sjvj.in</a>
                        </div>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default ContactInfo;