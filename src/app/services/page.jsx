import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import AboutStyle2 from '@/components/about/AboutStyle2';
import PartnerStyle1 from '@/components/partner/PartnerStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ServicesStyle2 from '@/components/services/ServicesStyle2';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import React from 'react';

export const metadata = {
    title: "SJVJ & CO. - Services"
}

const Service2Page = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Services" title="Our Services">
                <AboutStyle2 />
                <ServicesStyle2 />
                {/* <ProcessStyle1 /> */}
                {/* <PartnerStyle1 sectionClass="default-padding bg-gray" /> */}
                <TeamStyle1 teamTitle={true} />
                <RequestCallStyle1 />
                {/* <TestimonialStyle1 /> */}
                <BlogStyle1 sectionClass="bg-gray" />
            </LayoutStyle7>
        </>
    );
};

export default Service2Page;