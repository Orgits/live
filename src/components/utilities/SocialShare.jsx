import Link from 'next/link';
import React from 'react';

const SocialShare = () => {
    return (
        <>
            {/* <li>
                <Link className="facebook" href="https://www.facebook.com/" target="_blank">
                    <i className="fab fa-facebook-f"></i>
                </Link>
            </li>
            <li>
                <Link className="twitter" href="https://twitter.com/" target="_blank">
                    <i className="fab fa-twitter"></i>
                </Link>
            </li> */}
            <li>
                <Link className="https://pinterest.com/" href="mailto:svjassociates2017@gmail.com" target="_blank">
                    <i className="fas fa-envelope"></i>
                </Link>
            </li>
            <li>
                <Link className="linkedin" href="https://www.linkedin.com/in/vinit-jain-626b3249/" target="_blank">
                    <i className="fab fa-linkedin-in"></i>
                </Link>
            </li>
        </>
    );
};

export default SocialShare;