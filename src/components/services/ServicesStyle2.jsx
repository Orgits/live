import React from 'react';
import Services2Data from '@/assets/jsonData/services/Services2Data.json'
// import Services5Data from '@/assets/jsonData/services/Services5Data.json'
import SingleServices2 from './SingleServices2';

const ServicesStyle2 = () => {
    return (
        <>
            <div className="services-style-two-area default-padding bottom-less bg-cover bg-gray"
                style={{ backgroundImage: `url(/assets/img/shape/27.png)` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-heading">What we do</h4>
                                <h2 className="title">Services We're offering</h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(0, 3).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(3, 6).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(6, 9).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(9, 12).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(12, 15).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(15, 18).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(18, 21).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(21, 24).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(24, 27).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Services2Data.slice(27, 30).map(service =>
                            <div className="col-xl-4 col-md-6 mb-30" key={service.id}>
                                <SingleServices2 service={service} />
                            </div>
                        )}  
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle2;