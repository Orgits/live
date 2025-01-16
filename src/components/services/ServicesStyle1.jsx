import React from 'react';
import shape10 from '@/assets/img/shape/10.png'
import Services1TabData from '@/assets/jsonData/services/Services1TabData.json'
import SingleServices1 from './SingleServices1';
import Image from 'next/image';

const ServicesStyle1 = () => {
    return (
        <>
            <div className="services-style-one-area default-padding bg-gray">
                <div className="triangle-shape">
                    {/* <Image src={shape10} alt="Shape" /> */}
                </div>
                <div className="center-shape" style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}>
                </div>
                <div className="container">
                    <div className="row align-center">
                        <div className="col-lg-5 mb-md-60">
                            <div className="service-nav-info">
                                <h4 className="sub-title">Our Specializations</h4>
                                <h2>Your Trusted Chartered Accountants</h2>
                                <div className="nav nav-tabs service-tab-navs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-id-1" data-bs-toggle="tab" data-bs-target="#tab1" type="button" role="tab" aria-controls="tab" aria-selected="true">
                                        <i className="flaticon-"></i>
                                        AUDIT AND ASSURANCE
                                    </button>
                                    <button className="nav-link" id="nav-id-3" data-bs-toggle="tab" data-bs-target="#tab3" type="button" role="tab" aria-controls="tab3" aria-selected="false">
                                        <i className="international-"></i>
                                        INTERNATIONAL TAXATION
                                    </button>
                                    <button className="nav-link" id="nav-id-2" data-bs-toggle="tab" data-bs-target="#tab2" type="button" role="tab" aria-controls="tab2" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        LITIGATION SERVICES
                                    </button>
                                    <button className="nav-link" id="nav-id-4" data-bs-toggle="tab" data-bs-target="#tab4" type="button" role="tab" aria-controls="tab4" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        COMPANY AND LLP COMPLIANCES
                                    </button>
                                    <button className="nav-link" id="nav-id-5" data-bs-toggle="tab" data-bs-target="#tab5" type="button" role="tab" aria-controls="tab5" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        TRANSFER PRICING
                                    </button>
                                    <button className="nav-link" id="nav-id-6" data-bs-toggle="tab" data-bs-target="#tab6" type="button" role="tab" aria-controls="tab6" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        NRI SERVICES
                                    </button>
                                    <button className="nav-link" id="nav-id-7" data-bs-toggle="tab" data-bs-target="#tab7" type="button" role="tab" aria-controls="tab7" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        ACCOUNTING AND PAYROLL MANAGEMENT
                                    </button>
                                    <button className="nav-link" id="nav-id-8" data-bs-toggle="tab" data-bs-target="#tab8" type="button" role="tab" aria-controls="tab8" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        INCOME TAX COMPLIANCES
                                    </button>
                                    <button className="nav-link" id="nav-id-9" data-bs-toggle="tab" data-bs-target="#tab9" type="button" role="tab" aria-controls="tab9" aria-selected="false">
                                        <i className="flaticon-"></i>
                                        GOODS AND SERVICE TAX
                                    </button>
                                    <button className="nav-link" id="nav-id-10" data-bs-toggle="tab" data-bs-target="#tab10" type="button" role="tab" aria-controls="tab10" aria-selected="false">
                                        <i className="flaticon-trademark"></i>
                                        TRADEMARK AND COPYRIGHT
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 pl-50 pl-md-15 pl-xs-15">
                            <div className="tab-content services-tab-content" id="nav-tabContent">
                                {Services1TabData.map(service =>
                                    <div className={`tab-pane fade ${service.tabClass}`} id={service.tabId} role="tabpanel" aria-labelledby={service.ariaLabelled} key={service.id}>
                                        <div className="row">
                                            {service.tabData.map(data =>
                                                <div className="col-lg-6 col-md-6 mt-60 mt-md-30 mt-xs-30" key={data.id} >
                                                    <SingleServices1 data={data} />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle1;