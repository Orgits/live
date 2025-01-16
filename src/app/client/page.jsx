import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import TeamStyle1 from '@/components/team/TeamStyle1';
import TestimonialStyle1 from '@/components/testimonial/TestimonialStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import RequestCallStyle1 from '@/components/request/RequestCallStyle1';
import ClientSection from '@/components/client/ClientSection1';
import React from 'react';

export const metadata = {
    title: "SJVJ & CO. - Client"
}

const client = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="Client" title="Client">
            <ClientSection />
            <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                {/* <TestimonialStyle1 /> */}
                <RequestCallStyle1 />
                <BlogStyle1 sectionClass="bg-gray" />
            </LayoutStyle7>
        </>
    );
};

export default client;