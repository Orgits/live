import React from 'react';

const ContactMap = () => {
    return (
        <>
            <div className="maps-area bg-gray overflow-hidden">
                <div className="google-maps">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.695636049156!2d77.24955637429002!3d28.548866787877262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c57dcdf8d9%3A0xedb51d7bad5d3165!2sManjusha%20Building%2C%20Nehru%20Pl%20Market%20Rd%2C%20Nehru%20Place%2C%20New%20Delhi%2C%20Delhi%20110019!5e0!3m2!1sen!2sin!4v1731751395178!5m2!1sen!2sin" ></iframe>
                </div>
            </div>
        </>
    );
};

export default ContactMap;